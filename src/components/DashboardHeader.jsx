import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './shared/AuthContext';
import { COLORS, FONTS, RADIUS } from './shared/theme';
import statusIcon from '../assets/statusicon.png';
import userIcon from '../assets/user.png';
import logoutIcon from '../assets/logout.png';
import logo from '../assets/econiqueLogo.png';

export default function DashboardHeader({ role = 'user' }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: COLORS.white, boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
    >
      <div
        className="relative flex items-center justify-center h-14 px-4"
        style={{ maxWidth: '1400px', margin: '0 auto' }}
      >
        {/* Logo - Centered */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Econique" className="h-9 w-9 object-contain" />
          <span className="text-lg font-bold" style={{ color: COLORS.primary, fontFamily: FONTS.heading }}>
            EcoNique
          </span>
        </div>

        {/* Profile Dropdown - Absolute right */}
        <div className="absolute right-4" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 p-0 border-none bg-transparent cursor-pointer rounded-full transition-transform hover:scale-105"
          >
            <img
              src={userIcon}
              alt={displayName}
              className="w-9 h-9 rounded-full object-contain"
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
                  src={userIcon}
                  alt={displayName}
                  className="w-12 h-12 rounded-full object-contain"
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
                <img src={userIcon} alt="" className="w-4 h-4 object-contain" />
                Profile
              </button>
              <button
                className="flex items-center gap-3 w-full px-4 py-2.5 border-none bg-transparent text-left cursor-pointer text-sm font-medium transition-colors"
                style={{ color: COLORS.black, fontFamily: FONTS.body }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.offWhite)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <img src={statusIcon} alt="" className="w-4 h-4 object-contain" />
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
                <img src={logoutIcon} alt="" className="w-4 h-4 object-contain" />
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
