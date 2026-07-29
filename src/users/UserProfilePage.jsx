import React from 'react';
import { useAuth } from '../components/shared/AuthContext';
import { COLORS, FONTS, RADIUS } from '../components/shared/theme';
import userIcon from '../assets/user.png';

export default function UserProfilePage() {
  const { user } = useAuth();

  return (
    <main className="flex-1 p-6 overflow-y-auto" style={{ backgroundColor: COLORS.offWhite }}>
      <div className="max-w-2xl mx-auto mt-6">
        {/* Cover */}
        <div
          className="h-40 rounded-t-xl"
          style={{
            background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.primaryLight} 50%, ${COLORS.accent} 100%)`,
          }}
        />

        {/* Profile Card */}
        <div
          className="px-8 pb-8 -mt-16 relative z-10 text-center"
          style={{ backgroundColor: COLORS.white, borderRadius: `0 0 ${RADIUS.lg} ${RADIUS.lg}`, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
        >
          {/* Avatar */}
          <img
            src={userIcon}
            alt={user?.name || 'User'}
            className="w-28 h-28 rounded-full object-cover mx-auto mb-3"
            style={{ border: `5px solid ${COLORS.white}`, boxShadow: '0 2px 12px rgba(0,0,0,0.15)' }}
          />

          {/* Name */}
          <h1 className="text-2xl font-bold" style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}>
            {user?.name || 'User'}
          </h1>

          {/* Role Badge */}
          <span
            className="inline-block text-xs font-semibold px-3 py-1 rounded-full mt-1 mb-3"
            style={{ backgroundColor: COLORS.mintLight, color: COLORS.primaryDark, fontFamily: FONTS.body }}
          >
            User
          </span>

          {/* Email */}
          <p className="text-sm mb-6" style={{ color: COLORS.gray, fontFamily: FONTS.body }}>
            {user?.email || 'No email'}
          </p>

          {/* Stats Row */}
          <div className="flex items-center justify-center gap-6">
            <div
              className="flex flex-col items-center gap-1 px-8 py-4 rounded-xl"
              style={{ backgroundColor: COLORS.offWhite }}
            >
              <span className="text-2xl font-bold" style={{ color: COLORS.primary, fontFamily: FONTS.heading }}>
                {user?.totalPosts || 0}
              </span>
              <span className="text-xs font-medium" style={{ color: COLORS.darkGray, fontFamily: FONTS.body }}>
                Total Posts
              </span>
            </div>
            <div
              className="flex flex-col items-center gap-1 px-8 py-4 rounded-xl"
              style={{ backgroundColor: COLORS.mintLight }}
            >
              <span className="text-2xl font-bold" style={{ color: COLORS.primary, fontFamily: FONTS.heading }}>
                {user?.totalLikes || 0}
              </span>
              <span className="text-xs font-medium" style={{ color: COLORS.darkGray, fontFamily: FONTS.body }}>
                Likes Gained
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
