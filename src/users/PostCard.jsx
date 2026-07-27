import React, { useState } from 'react';
import { COLORS, FONTS, RADIUS } from '../components/shared/theme';
import userIcon from '../assets/user.png';

export default function PostCard({ user, text, area, caption, photo, time, status: initialStatus, role, onStatusUpdate, initialLikes = 0 }) {
  const [status, setStatus] = useState(initialStatus || 'Pending');
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

  const handleStatusToggle = () => {
    const newStatus = status === 'Pending' ? 'Done' : 'Pending';
    setStatus(newStatus);
    if (onStatusUpdate) onStatusUpdate(newStatus);
  };

  const isPending = status === 'Pending';

  const handleLike = () => {
    setLiked(!liked);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

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
        <img src={photo} alt="Post" className="w-full rounded-lg mb-3" />
      )}

      {/* Status + Like - Bottom */}
      <div
        className="flex items-center justify-between pt-3"
        style={{ borderTop: `1px solid ${COLORS.lightGray}` }}
      >
        <div className="flex items-center gap-3">
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{
              backgroundColor: isPending ? '#FFF3E0' : '#E8F5E9',
              color: isPending ? COLORS.warning : COLORS.success,
              fontFamily: FONTS.body,
            }}
          >
            {status}
          </span>

          {/* Like Button */}
          <button
            onClick={handleLike}
            className="flex items-center gap-1.5 px-3 py-1 border-none rounded-full text-xs font-semibold cursor-pointer transition-all"
            style={{
              backgroundColor: liked ? '#FFEBEE' : COLORS.offWhite,
              color: liked ? COLORS.error : COLORS.gray,
              fontFamily: FONTS.body,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
            {likes}
          </button>
        </div>

        {role === 'staff' && (
          <button
            onClick={handleStatusToggle}
            className="px-3 py-1 border-none rounded-full text-xs font-semibold cursor-pointer transition-all"
            style={{
              backgroundColor: isPending ? COLORS.success : COLORS.warning,
              color: COLORS.white,
              fontFamily: FONTS.body,
            }}
          >
            Mark as {isPending ? 'Done' : 'Pending'}
          </button>
        )}
      </div>
    </div>
  );
}
