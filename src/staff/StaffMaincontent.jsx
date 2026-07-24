import React from 'react';
import { useAuth } from '../components/shared/AuthContext';
import { COLORS, FONTS, RADIUS } from '../components/shared/theme';

export default function StaffMaincontent() {
  const { user } = useAuth();

  return (
    <main className="flex-1 p-6 overflow-y-auto" style={{ backgroundColor: COLORS.offWhite }}>
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-2xl font-bold mb-2"
          style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}
        >
          Staff Dashboard
        </h1>
        <p className="text-sm mb-8" style={{ color: COLORS.darkGray, fontFamily: FONTS.body }}>
          Welcome, {user?.name || 'Staff Member'}. Manage and oversee platform activity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { title: 'Total Users', value: '1,247', change: '+34 this week', color: COLORS.primary },
            { title: 'Active Reports', value: '12', change: '3 urgent', color: COLORS.warning },
            { title: 'Platform Health', value: '98%', change: 'All systems go', color: COLORS.success },
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
            Recent Staff Activity
          </h3>
          <div className="space-y-3">
            {[
              { action: 'Approved user registration', detail: 'jane.doe@email.com', time: '1 hour ago' },
              { action: 'Resolved support ticket', detail: '#1035 — Profile update', time: '3 hours ago' },
              { action: 'Updated content guidelines', detail: 'Recycling section', time: 'Yesterday' },
              { action: 'Flagged inappropriate content', detail: 'Community post #4821', time: '2 days ago' },
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
