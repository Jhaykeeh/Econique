import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/shared/AuthContext';
import { COLORS, FONTS, RADIUS } from '../components/shared/theme';

const navItems = [
  { to: '/staff/dashboard', label: 'Overview', end: true },
  { to: '/staff/dashboard/users', label: 'Manage Users' },
  { to: '/staff/dashboard/content', label: 'Content' },
  { to: '/staff/dashboard/reports', label: 'Reports' },
  { to: '/staff/dashboard/events', label: 'Events' },
];

export default function StaffLeftSidebar() {
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
    backgroundColor: isActive ? COLORS.primaryDark : 'transparent',
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
      style={{ backgroundColor: COLORS.white, borderRight: `1px solid ${COLORS.lightGray}` }}
    >
      <div className="mb-6 px-2">
        <h3
          className="text-xs font-semibold uppercase tracking-wider mb-1"
          style={{ color: COLORS.gray, fontFamily: FONTS.body }}
        >
          Staff Panel
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
