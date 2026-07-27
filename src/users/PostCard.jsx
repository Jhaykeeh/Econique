import React from 'react';
import { COLORS, FONTS, RADIUS } from '../components/shared/theme';
import userIcon from '../assets/user.png';

export default function PostCard({ user, text, area, caption, photo, time }) {
  return (
    <div
      className="p-4 mb-4"
      style={{
        backgroundColor: COLORS.white,
        borderRadius: RADIUS.lg,
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      }}
    >
      {/* User */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src={userIcon}
          alt={user}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold" style={{ color: COLORS.black, fontFamily: FONTS.heading }}>
            {user}
          </p>
          <p className="text-xs" style={{ color: COLORS.gray }}>{time}</p>
        </div>
      </div>

      {/* Post */}
      {text && (
        <p className="text-sm leading-relaxed mb-3" style={{ color: COLORS.black, fontFamily: FONTS.body }}>
          {text}
        </p>
      )}

      {/* Area */}
      {area && (
        <div className="mb-2">
          <span
            className="text-xs font-semibold"
            style={{ color: COLORS.darkGray, fontFamily: FONTS.body }}
          >
            Area:
          </span>{' '}
          <span
            className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ backgroundColor: COLORS.mintLight, color: COLORS.primaryDark, fontFamily: FONTS.body }}
          >
            {area}
          </span>
        </div>
      )}

      {/* Caption */}
      {caption && (
        <div className="mb-3">
          <span
            className="text-xs font-semibold"
            style={{ color: COLORS.darkGray, fontFamily: FONTS.body }}
          >
            Caption:
          </span>{' '}
          <span className="text-sm italic" style={{ color: COLORS.darkGray, fontFamily: FONTS.body }}>
            {caption}
          </span>
        </div>
      )}

      {/* Photo */}
      {photo && (
        <img src={photo} alt="Post" className="w-full rounded-lg" />
      )}
    </div>
  );
}
