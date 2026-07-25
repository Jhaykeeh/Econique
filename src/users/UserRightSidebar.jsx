import React from 'react';
import { COLORS, FONTS, RADIUS } from '../components/shared/theme';
import postIcon from '../assets/posticon.png';

const yourPosts = [
  { id: 1, title: 'Just planted 5 trees in our neighborhood!', timestamp: '2 hours ago', likes: 24 },
  { id: 2, title: 'Tips for reducing plastic waste at home', timestamp: '5 hours ago', likes: 18 },
  { id: 3, title: 'Community clean-up event was a success!', timestamp: '1 day ago', likes: 67 },
  { id: 4, title: 'My journey to zero waste — week 3 update', timestamp: '2 days ago', likes: 31 },
  { id: 5, title: 'Best eco-friendly products I have tried', timestamp: '3 days ago', likes: 45 },
  { id: 6, title: 'Water conservation challenge starts Monday', timestamp: '4 days ago', likes: 12 },
];

export default function UserRightSidebar() {
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
                <span className="flex items-center gap-1">
                  <img src={postIcon} alt="" className="w-3 h-3 object-contain" />
                  {post.likes}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Eco Tip */}
      <div
        className="p-4"
        style={{ backgroundColor: COLORS.offWhite, borderRadius: RADIUS.md }}
      >
        <h4
          className="text-sm font-semibold mb-2"
          style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}
        >
          Eco Tip of the Day
        </h4>
        <p className="text-xs leading-relaxed" style={{ color: COLORS.darkGray }}>
          Bring a reusable bag when shopping. Over 5 trillion plastic bags are
          used worldwide every year — small changes make a big difference!
        </p>
      </div>
    </aside>
  );
}
