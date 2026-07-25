import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../components/shared/AuthContext';
import { COLORS, FONTS, RADIUS } from '../components/shared/theme';
import userIcon from '../assets/user.png';
import homeIcon from '../assets/homeicon.png';
import postIcon from '../assets/posticon.png';
import statusIcon from '../assets/statusicon.png';

const navItems = [
  { to: '/staff/dashboard', label: 'Overview', icon: homeIcon, end: true },
  { to: '/staff/dashboard/users', label: 'Manage Users', icon: userIcon },
  { to: '/staff/dashboard/content', label: 'Content', icon: postIcon },
  { to: '/staff/dashboard/reports', label: 'Reports', icon: statusIcon },
  { to: '/staff/dashboard/events', label: 'Events', icon: statusIcon },
];

export default function StaffLeftSidebar() {
  const { user } = useAuth();

  const displayName = user?.name || 'Staff Member';

  const linkStyle = ({ isActive }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 12px',
    color: isActive ? COLORS.white : COLORS.darkGray,
    backgroundColor: isActive ? COLORS.primaryDark : 'transparent',
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
          src={userIcon}
          alt={displayName}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="text-sm font-semibold" style={{ color: COLORS.black, fontFamily: FONTS.heading }}>
            {displayName}
          </span>
          <span className="text-xs" style={{ color: COLORS.gray }}>
            Staff
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
            <img src={item.icon} alt="" className="w-4 h-4 object-contain" />
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
