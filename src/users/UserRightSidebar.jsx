import React from 'react';
import { COLORS, FONTS, RADIUS } from '../components/shared/theme';

export default function UserRightSidebar() {
  return (
    <aside
      className="w-72 p-4 flex flex-col gap-4"
      style={{ backgroundColor: COLORS.white, borderLeft: `1px solid ${COLORS.lightGray}` }}
    >
      <div
        className="p-4"
        style={{ backgroundColor: COLORS.lightGray, borderRadius: RADIUS.md }}
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

      <div
        className="p-4"
        style={{ backgroundColor: COLORS.offWhite, borderRadius: RADIUS.md }}
      >
        <h4
          className="text-sm font-semibold mb-2"
          style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}
        >
          Your Progress
        </h4>
        <div className="space-y-2">
          {[
            { label: 'CO2 Saved', value: '12.4 kg' },
            { label: 'Trees Planted', value: '3' },
            { label: 'Badges Earned', value: '5' },
          ].map((stat, i) => (
            <div key={i} className="flex justify-between text-xs" style={{ color: COLORS.darkGray }}>
              <span>{stat.label}</span>
              <span className="font-semibold" style={{ color: COLORS.primary }}>{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="p-4"
        style={{ backgroundColor: COLORS.mintLight, borderRadius: RADIUS.md }}
      >
        <h4
          className="text-sm font-semibold mb-2"
          style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}
        >
          Upcoming Events
        </h4>
        <ul className="text-xs space-y-2" style={{ color: COLORS.darkGray }}>
          <li>🌱 Community Clean-up — Aug 5</li>
          <li>♻️ Recycling Workshop — Aug 12</li>
          <li>🌳 Tree Planting Day — Aug 20</li>
        </ul>
      </div>
    </aside>
  );
}
