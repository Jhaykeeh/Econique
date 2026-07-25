import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/shared/AuthContext';
import { COLORS, FONTS, RADIUS } from '../components/shared/theme';

const navItems = [
  { to: '/dashboard', label: 'Overview', icon: '📰', end: true },
  { to: '/dashboard/profile', label: 'Profile', icon: '👤' },
  { to: '/dashboard/goals', label: 'Eco Goals', icon: '🎯' },
  { to: '/dashboard/activities', label: 'Activities', icon: '🌿' },
  { to: '/dashboard/community', label: 'Community', icon: '👥' },
];

export default function UserLeftSidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const displayName = user?.name || 'User';
  const displayAvatar = `https://i.pravatar.cc/150?u=${user?.email || 'default'}`;

  const linkStyle = ({ isActive }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 12px',
    color: isActive ? COLORS.white : COLORS.darkGray,
    backgroundColor: isActive ? COLORS.primary : 'transparent',
    borderRadius: RADIUS.md,
    textDecoration: 'none',
    fontFamily: FONTS.body,
    fontSize: '14px',
    fontWeight: isActive ? 600 : 400,
    transition: 'all 0.2s',
    marginBottom: '2px',
  });

  return (
    <aside
      className="w-64 min-h-screen p-4 flex flex-col sticky top-14"
      style={{ backgroundColor: COLORS.white, borderRight: `1px solid ${COLORS.lightGray}` }}
    >
      {/* Profile Card */}
      <div
        className="flex items-center gap-3 p-3 mb-4 cursor-pointer rounded-lg transition-colors"
        style={{ backgroundColor: COLORS.offWhite }}
      >
        <img
          src={displayAvatar}
          alt={displayName}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="text-sm font-semibold" style={{ color: COLORS.black, fontFamily: FONTS.heading }}>
            {displayName}
          </span>
          <span className="text-xs" style={{ color: COLORS.gray }}>
            User
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            style={linkStyle}
          >
            <span>{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 mt-auto py-2.5 px-4 text-sm font-semibold text-white cursor-pointer border-none"
        style={{
          backgroundColor: COLORS.error,
          borderRadius: RADIUS.md,
          fontFamily: FONTS.body,
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={(e) => (e.target.style.opacity = '0.85')}
        onMouseLeave={(e) => (e.target.style.opacity = '1')}
      >
        <span>🚪</span>
        Logout
      </button>
    </aside>
  );
}
