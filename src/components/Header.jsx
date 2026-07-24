import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from './shared/AuthContext';
import { COLORS, FONTS, RADIUS } from './shared/theme';
import logo from '../assets/econiqueLogo.png';

export default function Header() {
  const { isAuthenticated, role, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const linkStyle = ({ isActive }) => ({
    color: isActive ? COLORS.white : COLORS.mintLight,
    backgroundColor: isActive ? COLORS.primaryDark : 'transparent',
    fontFamily: FONTS.body,
    fontWeight: isActive ? 600 : 400,
    padding: '6px 16px',
    borderRadius: RADIUS.full,
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'all 0.2s',
  });

  const getDashboardPath = () => {
    if (role === 'admin') return '/admin/dashboard';
    if (role === 'staff') return '/staff/dashboard';
    return '/dashboard';
  };

  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-3"
      style={{ backgroundColor: COLORS.primaryDark, boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
    >
      <NavLink to="/" className="flex items-center gap-2 no-underline">
        <img src={logo} alt="Econique" className="h-9 w-9 object-contain" />
        <span
          className="text-lg font-bold text-white"
          style={{ fontFamily: FONTS.heading }}
        >
          Econique
        </span>
      </NavLink>

      <nav className="flex items-center gap-1">
        {!isAuthenticated ? (
          <>
            <NavLink to="/" style={linkStyle}>Home</NavLink>
            <NavLink to="/about" style={linkStyle}>About</NavLink>
            <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
            <NavLink to="/register" style={linkStyle}>Register</NavLink>
            <NavLink to="/login" style={linkStyle}>Login</NavLink>
            <NavLink to="/admin/login" style={linkStyle}>Admin</NavLink>
          </>
        ) : (
          <>
            <NavLink to={getDashboardPath()} style={linkStyle}>Dashboard</NavLink>
            <button
              onClick={handleLogout}
              className="text-sm font-medium cursor-pointer border-none"
              style={{
                color: COLORS.mintLight,
                backgroundColor: 'transparent',
                fontFamily: FONTS.body,
                padding: '6px 16px',
                borderRadius: RADIUS.full,
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = COLORS.white)}
              onMouseLeave={(e) => (e.target.style.color = COLORS.mintLight)}
            >
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
