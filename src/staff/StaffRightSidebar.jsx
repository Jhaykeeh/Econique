import React from 'react';
import { COLORS, FONTS, RADIUS } from '../components/shared/theme';

const yourPosts = [
  { id: 1, title: 'New content guidelines are now live', timestamp: '2 hours ago', likes: 15 },
  { id: 2, title: 'Approved 34 user registrations today', timestamp: '5 hours ago', likes: 8 },
  { id: 3, title: 'Platform maintenance scheduled for Sunday', timestamp: '1 day ago', likes: 22 },
  { id: 4, title: 'Updated the FAQ section with new questions', timestamp: '2 days ago', likes: 11 },
  { id: 5, title: 'Monthly staff meeting notes — July', timestamp: '3 days ago', likes: 19 },
];

export default function StaffRightSidebar() {
  return (
    <aside
      className="w-72 p-4 flex flex-col gap-4 sticky top-14"
      style={{ backgroundColor: COLORS.white, borderLeft: `1px solid ${COLORS.lightGray}` }}
    >
      {/* Your Posts */}
      <div>
        <h3
          className="text-base font-bold mb-3 px-2"
          style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}
        >
          Your Posts
        </h3>
        <div className="flex flex-col">
          {yourPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col gap-1 p-2.5 rounded-lg cursor-pointer transition-colors"
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.offWhite)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <p
                className="text-sm font-medium leading-snug"
                style={{ color: COLORS.black }}
              >
                {post.title}
              </p>
              <div className="flex items-center gap-3 text-xs" style={{ color: COLORS.gray }}>
                <span>{post.timestamp}</span>
                <span>👍 {post.likes}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Staff Announcements */}
      <div
        className="p-4"
        style={{ backgroundColor: COLORS.offWhite, borderRadius: RADIUS.md }}
      >
        <h4
          className="text-sm font-semibold mb-2"
          style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}
        >
          Staff Announcements
        </h4>
        <ul className="text-xs space-y-2" style={{ color: COLORS.darkGray }}>
          <li>📋 Quarterly review — Aug 1</li>
          <li>🆕 New content guidelines published</li>
          <li>🎉 Team meeting — Every Friday 10am</li>
        </ul>
      </div>
    </aside>
  );
}
