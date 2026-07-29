import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/shared/AuthContext';
import { COLORS, FONTS, RADIUS } from '../components/shared/theme';
import userIcon from '../assets/user.png';
import homeIcon from '../assets/homeicon.png';
import postIcon from '../assets/posticon.png';
import statusIcon from '../assets/statusicon.png';
import notificationIcon from '../assets/notification.png';

const navItems = [
  { to: '/dashboard', label: 'Home', icon: homeIcon, end: true },
  { to: '/dashboard/your-posts', label: 'Your Posts', icon: postIcon },
  { to: '/dashboard/post-status', label: 'Post Status', icon: statusIcon },
  { to: '/dashboard/notifications', label: 'Notifications', icon: notificationIcon },
];

export default function UserLeftSidebar() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const displayName = user?.name || 'User';

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
      className="w-64 shrink-0 p-4 flex flex-col sticky top-14 max-h-[calc(100vh-56px)] overflow-y-auto"
      style={{ backgroundColor: COLORS.white, borderRight: `1px solid ${COLORS.lightGray}` }}
    >
      {/* Profile Card */}
      <div
        onClick={() => navigate('/dashboard/profile')}
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
            <img src={item.icon} alt="" className="w-4 h-4 object-contain" />
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
