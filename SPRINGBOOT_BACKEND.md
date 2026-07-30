# Spring Boot Backend Setup

## 1. Create Project

Use Spring Initializr (https://start.spring.io/) with:

| Setting | Value |
|---------|-------|
| Build Tool | Maven |
| Java | 17+ |
| Group | com.econique |
| Artifact | econique-backend |
| Dependencies | Spring Web, Spring Data JPA, Spring Security, MySQL Driver, Lombok, Validation |

Or via CLI:
```bash
curl https://start.spring.io/starter.zip \
  -d type=maven-project \
  -d language=java \
  -d bootVersion=3.2.0 \
  -d groupId=com.econique \
  -d artifactId=econique-backend \
  -d dependencies=web,data-jpa,security,mysql,lombok,validation \
  -o econique-backend.zip
```

---

## 2. Project Structure

```
econique-backend/
├── pom.xml
├── src/main/resources/
│   └── application.yml
└── src/main/java/com/econique/
    ├── EconiqueApplication.java
    ├── config/
    │   ├── SecurityConfig.java
    │   └── CorsConfig.java
    ├── auth/
    │   ├── AuthController.java
    │   ├── AuthService.java
    │   ├── JwtUtil.java
    │   ├── LoginRequest.java
    │   ├── RegisterRequest.java
    │   └── AuthResponse.java
    ├── user/
    │   ├── User.java
    │   ├── UserRepository.java
    │   ├── UserService.java
    │   └── UserController.java
    ├── post/
    │   ├── Post.java
    │   ├── PostRepository.java
    │   ├── PostService.java
    │   └── PostController.java
    └── notification/
        ├── Notification.java
        ├── NotificationRepository.java
        └── NotificationService.java
```

---

## 3. Data Models

### User Entity

```java
@Entity
@Table(name = "users")
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password; // BCrypt hashed

    private String firstName;
    private String lastName;
    private int totalPosts;
    private int totalLikes;

    @Enumerated(EnumType.STRING)
    private Role role; // USER, STAFF, ADMIN
}

public enum Role {
    USER, STAFF, ADMIN
}
```

### Post Entity

```java
@Entity
@Table(name = "posts")
public class Post {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(columnDefinition = "TEXT")
    private String text;

    private String photo;
    private String area;
    private String caption;
    private int likes;

    @Enumerated(EnumType.STRING)
    private PostStatus status; // PENDING, DONE

    private String proofUrl;
    private LocalDateTime createdAt;
}

public enum PostStatus {
    PENDING, DONE
}
```

---

## 4. API Endpoints

### Authentication

| Method | Endpoint | Body | Response |
|--------|----------|------|----------|
| POST | `/api/auth/register` | `{ firstName, lastName, email, password, role }` | `{ token, user }` |
| POST | `/api/auth/login` | `{ email, password }` | `{ token, user }` |
| GET | `/api/auth/me` | (JWT in header) | `{ user }` |

### Posts

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/posts` | STAFF | All posts |
| GET | `/api/posts/mine` | USER | Current user's posts |
| POST | `/api/posts` | USER | Create post |
| PATCH | `/api/posts/{id}/status` | STAFF | Update status + proof |
| POST | `/api/posts/{id}/like` | USER | Toggle like |

### Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users/profile` | Get profile |
| PATCH | `/api/users/profile` | Update name/email |
| PATCH | `/api/users/password` | Change password |

---

## 5. Key Config

### application.yml

```yaml
server:
  port: 8080

spring:
  datasource:
    url: jdbc:mysql://localhost:3306/econique
    username: root
    password: yourpassword
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true

jwt:
  secret: your-secret-key-change-in-production
  expiration: 86400000 # 24 hours
```

### CORS Config

```java
@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("GET","POST","PATCH","DELETE")
                .allowCredentials(true);
    }
}
```

### Security Config

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) {
        http.csrf().disable()
            .cors()
            .and()
            .sessionManagement().sessionCreationPolicy(STATELESS)
            .and()
            .authorizeHttpRequests()
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            .and()
            .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }
}
```

---

## 6. Frontend Changes

### Replace AuthContext.js mock logic

```js
const login = async (email, password, userRole) => {
    const res = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role: userRole }),
    });
    const data = await res.json();
    localStorage.setItem('econique_token', data.token);
    localStorage.setItem('econique_user', JSON.stringify(data.user));
    localStorage.setItem('econique_role', data.user.role);
    setUser(data.user);
    setRole(data.user.role);
};
```

### Create API utility

```js
// src/api.js
const API = 'http://localhost:8080/api';

const headers = () => ({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('econique_token')}`,
});

export const api = {
    get: (path) => fetch(API + path, { headers: headers() }),
    post: (path, body) => fetch(API + path, { method: 'POST', headers: headers(), body: JSON.stringify(body) }),
    patch: (path, body) => fetch(API + path, { method: 'PATCH', headers: headers(), body: JSON.stringify(body) }),
    delete: (path) => fetch(API + path, { method: 'DELETE', headers: headers() }),
};
```

---

## 7. Migration Order

1. **Auth** — register, login, JWT, me endpoint
2. **Posts** — create, list, status update
3. **Likes** — toggle like on posts
4. **Profile/Settings** — user profile endpoints
5. **Notifications** — depends on posts and likes
