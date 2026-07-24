import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/shared/AuthContext';
import { COLORS, FONTS, RADIUS } from '../components/shared/theme';

const navItems = [
  { to: '/admin/dashboard', label: 'Overview', end: true },
  { to: '/admin/dashboard/users', label: 'User Management' },
  { to: '/admin/dashboard/staff', label: 'Staff Management' },
  { to: '/admin/dashboard/settings', label: 'Settings' },
  { to: '/admin/dashboard/analytics', label: 'Analytics' },
  { to: '/admin/dashboard/logs', label: 'System Logs' },
];

export default function AdminSidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const linkStyle = ({ isActive }) => ({
    display: 'block',
    padding: '10px 16px',
    color: isActive ? COLORS.white : COLORS.darkGray,
    backgroundColor: isActive ? COLORS.black : 'transparent',
    borderRadius: RADIUS.md,
    textDecoration: 'none',
    fontFamily: FONTS.body,
    fontSize: '14px',
    fontWeight: isActive ? 600 : 400,
    transition: 'all 0.2s',
    marginBottom: '4px',
  });

  return (
    <aside
      className="w-64 min-h-screen p-4 flex flex-col"
      style={{ backgroundColor: COLORS.black, borderRight: `1px solid ${COLORS.darkGray}` }}
    >
      <div className="mb-6 px-2">
        <h3
          className="text-xs font-semibold uppercase tracking-wider mb-1"
          style={{ color: COLORS.mint, fontFamily: FONTS.body }}
        >
          Admin Console
        </h3>
      </div>

      <nav className="flex-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            style={linkStyle}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <button
        onClick={handleLogout}
        className="mt-auto py-2.5 px-4 text-sm font-semibold text-white text-left cursor-pointer border-none"
        style={{
          backgroundColor: COLORS.error,
          borderRadius: RADIUS.md,
          fontFamily: FONTS.body,
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={(e) => (e.target.style.opacity = '0.85')}
        onMouseLeave={(e) => (e.target.style.opacity = '1')}
      >
        Logout
      </button>
    </aside>
  );
}
