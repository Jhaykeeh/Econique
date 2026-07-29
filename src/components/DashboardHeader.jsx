import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './shared/AuthContext';
import { COLORS, FONTS, RADIUS } from './shared/theme';
import settingsIcon from '../assets/settingsicon.png';
import userIcon from '../assets/user.png';
import logoutIcon from '../assets/logout.png';
import notificationIcon from '../assets/notification.png';
import logo from '../assets/econiqueLogo.png';

const mockNotifications = [
  {
    id: 1,
    type: 'like',
    user: 'Maria Santos',
    action: 'liked your post',
    detail: 'Reported garbage near the riverside walkway',
    time: '2 min ago',
    read: false,
  },
  {
    id: 2,
    type: 'status',
    user: 'Staff Team',
    action: 'marked your report as Done',
    detail: 'NGE dumpster overflow — Cleanup completed',
    time: '1 hour ago',
    read: false,
  },
  {
    id: 3,
    type: 'like',
    user: 'Juan Dela Cruz',
    action: 'liked your post',
    detail: 'Broken glass bottles in SAL courtyard',
    time: '3 hours ago',
    read: false,
  },
  {
    id: 4,
    type: 'status',
    user: 'Staff Team',
    action: 'marked your report as Done',
    detail: 'ALLIED hallway spill — Area cleaned',
    time: '1 day ago',
    read: true,
  },
  {
    id: 5,
    type: 'like',
    user: 'Carlo Mendoza',
    action: 'liked your post',
    detail: 'Construction debris near East Wing entrance',
    time: '2 days ago',
    read: true,
  },
];

const getNotifIcon = (type) => {
  if (type === 'like') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
};

const getNotifColor = (type) => {
  if (type === 'like') return COLORS.error;
  return COLORS.success;
};

const getNotifBg = (type) => {
  if (type === 'like') return '#FFEBEE';
  return '#E8F5E9';
};

export default function DashboardHeader({ role = 'user' }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const dropdownRef = useRef(null);
  const notifRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setNotifOpen(false);
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
  const unreadCount = mockNotifications.filter((n) => !n.read).length;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: COLORS.white,
        borderBottom: `3px solid ${COLORS.primary}`,
        boxShadow: '0 1px 8px rgba(30,94,32,0.08)',
      }}
    >
      <div
        className="relative flex items-center justify-center h-16 px-6"
        style={{ maxWidth: '1400px', margin: '0 auto' }}
      >
        {/* Logo - Centered */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate(role === 'staff' ? '/staff/dashboard' : '/dashboard')}>
          <div
            className="flex items-center justify-center w-10 h-10 rounded-xl"
            style={{ backgroundColor: COLORS.offWhite }}
          >
            <img src={logo} alt="Econique" className="h-7 w-7 object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight" style={{ color: COLORS.primary, fontFamily: FONTS.heading }}>
              EcoNique
            </span>
            <span className="text-[10px] font-medium leading-tight -mt-0.5" style={{ color: COLORS.gray, fontFamily: FONTS.body }}>
              {role === 'staff' ? 'Staff Portal' : 'Sustainability Hub'}
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="absolute right-6 flex items-center gap-3">
          {/* Notification Bell */}
          <div className="relative" ref={notifRef}>
            <button
              onClick={() => { setNotifOpen(!notifOpen); setDropdownOpen(false); }}
              className="relative flex items-center justify-center w-10 h-10 border-none rounded-xl cursor-pointer transition-all hover:scale-105"
              style={{ backgroundColor: notifOpen ? COLORS.primary : COLORS.offWhite }}
            >
              <img
                src={notificationIcon}
                alt="Notifications"
                className="w-5 h-5 object-contain"
                style={{ filter: notifOpen ? 'brightness(0) invert(1)' : 'brightness(0.4)' }}
              />
              {unreadCount > 0 && (
                <span
                  className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 flex items-center justify-center rounded-full text-[9px] font-bold"
                  style={{ backgroundColor: COLORS.error, color: COLORS.white, minWidth: '18px', height: '18px' }}
                >
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notification Dropdown */}
            {notifOpen && (
              <div
                className="absolute top-full right-0 mt-2 w-80 max-h-[420px] overflow-hidden"
                style={{
                  backgroundColor: COLORS.white,
                  borderRadius: RADIUS.lg,
                  boxShadow: '0 8px 32px rgba(30,94,32,0.12), 0 2px 8px rgba(0,0,0,0.06)',
                  animation: 'dropdownSlide 0.25s ease',
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between p-4 pb-3">
                  <h3 className="text-sm font-bold" style={{ color: COLORS.black, fontFamily: FONTS.heading }}>
                    Notifications
                  </h3>
                  <button
                    className="text-xs font-medium border-none bg-transparent cursor-pointer transition-colors"
                    style={{ color: COLORS.primary, fontFamily: FONTS.body }}
                  >
                    Mark all read
                  </button>
                </div>

                <div style={{ height: '1px', backgroundColor: COLORS.lightGray }} />

                {/* Notification List */}
                <div className="overflow-y-auto" style={{ maxHeight: '360px' }}>
                  {mockNotifications.map((notif) => (
                    <div
                      key={notif.id}
                      className="flex items-start gap-3 p-4 cursor-pointer transition-all"
                      style={{
                        backgroundColor: notif.read ? 'transparent' : COLORS.offWhite,
                        borderBottom: `1px solid ${COLORS.lightGray}`,
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.mintLight)}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = notif.read ? 'transparent' : COLORS.offWhite)}
                    >
                      {/* Icon */}
                      <div
                        className="w-9 h-9 flex items-center justify-center rounded-full shrink-0"
                        style={{ backgroundColor: getNotifBg(notif.type), color: getNotifColor(notif.type) }}
                      >
                        {getNotifIcon(notif.type)}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm leading-snug" style={{ color: COLORS.black, fontFamily: FONTS.body }}>
                          <span className="font-semibold">{notif.user}</span>{' '}
                          <span style={{ color: COLORS.darkGray }}>{notif.action}</span>
                        </p>
                        <p className="text-xs mt-0.5 truncate" style={{ color: COLORS.gray }}>
                          {notif.detail}
                        </p>
                        <p className="text-[11px] mt-1 font-medium" style={{ color: COLORS.gray }}>
                          {notif.time}
                        </p>
                      </div>

                      {/* Unread dot */}
                      {!notif.read && (
                        <div
                          className="w-2.5 h-2.5 rounded-full shrink-0 mt-1.5"
                          style={{ backgroundColor: COLORS.primary }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Profile Button */}
          <button
            onClick={() => { setDropdownOpen(!dropdownOpen); setNotifOpen(false); }}
            className="flex items-center gap-2.5 pl-1.5 pr-3 py-1.5 border-none cursor-pointer rounded-full transition-all hover:scale-105"
            style={{ backgroundColor: COLORS.offWhite }}
          >
            <img
              src={userIcon}
              alt={displayName}
              className="w-9 h-9 rounded-full object-cover"
              style={{ border: `2px solid ${COLORS.primary}` }}
            />
            <span className="text-sm font-semibold hidden sm:inline" style={{ color: COLORS.darkGray, fontFamily: FONTS.heading }}>
              {displayName.split(' ')[0]}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke={COLORS.gray}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
              style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          {/* Profile Dropdown */}
          {dropdownOpen && (
            <div
              className="absolute top-full right-0 mt-2 w-72 overflow-hidden"
              style={{
                backgroundColor: COLORS.white,
                borderRadius: RADIUS.lg,
                boxShadow: '0 8px 32px rgba(30,94,32,0.12), 0 2px 8px rgba(0,0,0,0.06)',
                animation: 'dropdownSlide 0.25s ease',
              }}
            >
              {/* User Info */}
              <div
                className="flex items-center gap-3 p-4"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.offWhite} 0%, ${COLORS.mintLight} 100%)`,
                }}
              >
                <img
                  src={userIcon}
                  alt={displayName}
                  className="w-12 h-12 rounded-full object-cover"
                  style={{ border: `3px solid ${COLORS.white}`, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
                />
                <div className="flex flex-col">
                  <span className="text-sm font-bold" style={{ color: COLORS.black, fontFamily: FONTS.heading }}>
                    {displayName}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full mt-0.5 self-start font-medium" style={{ backgroundColor: COLORS.primary, color: COLORS.white, fontFamily: FONTS.body }}>
                    {role.charAt(0).toUpperCase() + role.slice(1)}
                  </span>
                </div>
              </div>

              <div className="my-1" style={{ height: '1px', backgroundColor: COLORS.lightGray }} />

              {/* Menu Items */}
              <div className="py-1">
                <button
                  onClick={() => { setDropdownOpen(false); navigate(role === 'staff' ? '/staff/dashboard' : '/dashboard/profile'); }}
                  className="flex items-center gap-3 w-full px-4 py-2.5 border-none bg-transparent text-left cursor-pointer text-sm font-medium transition-all"
                  style={{ color: COLORS.darkGray, fontFamily: FONTS.body }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.offWhite)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg" style={{ backgroundColor: COLORS.offWhite }}>
                    <img src={userIcon} alt="" className="w-4 h-4 object-contain" />
                  </div>
                  Profile
                </button>
                <button
                  onClick={() => { setDropdownOpen(false); navigate(role === 'staff' ? '/staff/dashboard' : '/dashboard/settings'); }}
                  className="flex items-center gap-3 w-full px-4 py-2.5 border-none bg-transparent text-left cursor-pointer text-sm font-medium transition-all"
                  style={{ color: COLORS.darkGray, fontFamily: FONTS.body }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.offWhite)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg" style={{ backgroundColor: COLORS.offWhite }}>
                    <img src={settingsIcon} alt="" className="w-4 h-4 object-contain" />
                  </div>
                  Settings
                </button>
              </div>

              <div className="my-1" style={{ height: '1px', backgroundColor: COLORS.lightGray }} />

              <div className="py-1">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 w-full px-4 py-2.5 border-none bg-transparent text-left cursor-pointer text-sm font-medium transition-all"
                  style={{ color: COLORS.error, fontFamily: FONTS.body }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.errorLight)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg" style={{ backgroundColor: COLORS.errorLight }}>
                    <img src={logoutIcon} alt="" className="w-4 h-4 object-contain" />
                  </div>
                  Logout
                </button>
              </div>
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
