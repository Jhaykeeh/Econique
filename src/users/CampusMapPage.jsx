import React from 'react';
import { COLORS, FONTS, RADIUS } from '../components/shared/theme';
import campusMap from '../assets/campusmap.jpg';

export default function CampusMapPage() {
  return (
    <main className="flex-1 p-6 overflow-y-auto" style={{ backgroundColor: COLORS.offWhite }}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-1" style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}>
          Campus Map
        </h1>
        <p className="text-sm mb-6" style={{ color: COLORS.gray, fontFamily: FONTS.body }}>
          View the campus layout and area locations.
        </p>
        <div
          className="p-4"
          style={{ backgroundColor: COLORS.white, borderRadius: RADIUS.lg, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
        >
          <img
            src={campusMap}
            alt="Campus Map"
            className="w-full h-auto rounded-lg"
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </main>
  );
}
