import React from 'react';
import { useAuth } from '../components/shared/AuthContext';
import { COLORS, FONTS, RADIUS } from '../components/shared/theme';

export default function UserMainContent() {
  const { user } = useAuth();

  return (
    <main className="flex-1 p-6 overflow-y-auto" style={{ backgroundColor: COLORS.offWhite }}>
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-2xl font-bold mb-2"
          style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}
        >
          Welcome back, {user?.name || 'User'}!
        </h1>
        <p className="text-sm mb-8" style={{ color: COLORS.darkGray, fontFamily: FONTS.body }}>
          Here's your sustainability dashboard overview.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { title: 'Carbon Footprint', value: '2.1 tons', change: '-12% this month', color: COLORS.primary },
            { title: 'Water Saved', value: '1,240 L', change: '+8% this month', color: COLORS.accent },
            { title: 'Energy Efficiency', value: '87%', change: 'On track', color: COLORS.mintDark },
          ].map((card, i) => (
            <div
              key={i}
              className="p-5"
              style={{
                backgroundColor: COLORS.white,
                borderRadius: RADIUS.lg,
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <p className="text-xs mb-1" style={{ color: COLORS.gray, fontFamily: FONTS.body }}>
                {card.title}
              </p>
              <p
                className="text-2xl font-bold"
                style={{ color: card.color, fontFamily: FONTS.heading }}
              >
                {card.value}
              </p>
              <p className="text-xs mt-1" style={{ color: COLORS.success }}>
                {card.change}
              </p>
            </div>
          ))}
        </div>

        <div
          className="p-6"
          style={{
            backgroundColor: COLORS.white,
            borderRadius: RADIUS.lg,
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          }}
        >
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: COLORS.black, fontFamily: FONTS.heading }}
          >
            Recent Activity
          </h3>
          <div className="space-y-3">
            {[
              { action: 'Logged a bike ride', detail: 'Saved 2.4 kg CO2', time: '2 hours ago' },
              { action: 'Completed recycling goal', detail: '10 items recycled', time: 'Yesterday' },
              { action: 'Joined community event', detail: 'Park clean-up crew', time: '3 days ago' },
            ].map((activity, i) => (
              <div
                key={i}
                className="flex justify-between items-center py-2 border-b"
                style={{ borderColor: COLORS.lightGray }}
              >
                <div>
                  <p className="text-sm font-medium" style={{ color: COLORS.black }}>
                    {activity.action}
                  </p>
                  <p className="text-xs" style={{ color: COLORS.gray }}>
                    {activity.detail}
                  </p>
                </div>
                <span className="text-xs" style={{ color: COLORS.gray }}>
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
