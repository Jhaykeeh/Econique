import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from './shared/AuthContext';
import { COLORS, FONTS, RADIUS } from './shared/theme';

export default function DashboardHeader({ role = 'user' }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const dropdownRef = useRef(null);

  const dashboardPath = role === 'staff' ? '/staff/dashboard' : '/dashboard';

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠', path: dashboardPath },
    { id: 'posts', label: 'Your Posts', icon: '📄', path: `${dashboardPath}/posts` },
    { id: 'status', label: 'Post Status', icon: '✏️', path: `${dashboardPath}/status` },
    { id: 'notifications', label: 'Notifications', icon: '🔔', path: `${dashboardPath}/notifications` },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const displayName = user?.name || (role === 'staff' ? 'Staff Member' : 'User');
  const displayAvatar = `https://i.pravatar.cc/150?u=${user?.email || 'default'}`;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: COLORS.white, boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
    >
      <div
        className="flex items-center justify-between h-14 px-4"
        style={{ maxWidth: '1400px', margin: '0 auto' }}
      >
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 no-underline">
          <span className="text-lg font-bold" style={{ color: COLORS.primary, fontFamily: FONTS.heading }}>
            EcoNique
          </span>
        </NavLink>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className="flex items-center gap-1.5 px-3 py-1.5 border-none cursor-pointer text-sm font-semibold rounded-lg transition-all"
              style={{
                backgroundColor: activeNav === item.id ? COLORS.offWhite : 'transparent',
                color: activeNav === item.id ? COLORS.primary : COLORS.gray,
                fontFamily: FONTS.body,
              }}
            >
              <span>{item.icon}</span>
              <span className="hidden lg:inline">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Mobile nav - icons only */}
        <nav className="flex md:hidden items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className="p-2 border-none cursor-pointer rounded-lg transition-all"
              style={{
                backgroundColor: activeNav === item.id ? COLORS.offWhite : 'transparent',
                fontSize: '18px',
              }}
            >
              {item.icon}
            </button>
          ))}
        </nav>

        {/* Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 p-0 border-none bg-transparent cursor-pointer rounded-full transition-transform hover:scale-105"
          >
            <img
              src={displayAvatar}
              alt={displayName}
              className="w-9 h-9 rounded-full object-cover"
            />
          </button>

          {dropdownOpen && (
            <div
              className="absolute top-full right-0 mt-2 w-64 overflow-hidden"
              style={{
                backgroundColor: COLORS.white,
                borderRadius: RADIUS.md,
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                animation: 'dropdownSlide 0.2s ease',
              }}
            >
              {/* User Info */}
              <div
                className="flex items-center gap-3 p-4"
                style={{ backgroundColor: COLORS.offWhite }}
              >
                <img
                  src={displayAvatar}
                  alt={displayName}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-bold" style={{ color: COLORS.black, fontFamily: FONTS.heading }}>
                    {displayName}
                  </span>
                  <span className="text-xs" style={{ color: COLORS.gray }}>
                    {role.charAt(0).toUpperCase() + role.slice(1)}
                  </span>
                </div>
              </div>

              <div className="my-1" style={{ height: '1px', backgroundColor: COLORS.lightGray }} />

              {/* Menu Items */}
              <button
                className="flex items-center gap-3 w-full px-4 py-2.5 border-none bg-transparent text-left cursor-pointer text-sm font-medium transition-colors"
                style={{ color: COLORS.black, fontFamily: FONTS.body }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.offWhite)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <span>👤</span>
                Profile
              </button>
              <button
                className="flex items-center gap-3 w-full px-4 py-2.5 border-none bg-transparent text-left cursor-pointer text-sm font-medium transition-colors"
                style={{ color: COLORS.black, fontFamily: FONTS.body }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.offWhite)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <span>⚙️</span>
                Settings
              </button>

              <div className="my-1" style={{ height: '1px', backgroundColor: COLORS.lightGray }} />

              <button
                onClick={handleLogout}
                className="flex items-center gap-3 w-full px-4 py-2.5 border-none bg-transparent text-left cursor-pointer text-sm font-medium transition-colors"
                style={{ color: COLORS.error, fontFamily: FONTS.body }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.errorLight)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <span>🚪</span>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes dropdownSlide {
          from { opacity: 0; transform: translateY(-8px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </header>
  );
}
