import React from 'react';
import { useAuth } from '../components/shared/AuthContext';
import { COLORS, FONTS, RADIUS } from '../components/shared/theme';

export default function AdminMainContent() {
  const { user } = useAuth();

  return (
    <main className="flex-1 p-6 overflow-y-auto" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="max-w-5xl mx-auto">
        <h1
          className="text-2xl font-bold mb-2"
          style={{ color: COLORS.black, fontFamily: FONTS.heading }}
        >
          Admin Dashboard
        </h1>
        <p className="text-sm mb-8" style={{ color: COLORS.darkGray, fontFamily: FONTS.body }}>
          Welcome, {user?.name || 'Admin'}. Full platform control and oversight.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { title: 'Total Users', value: '1,247', color: COLORS.primary },
            { title: 'Staff Members', value: '18', color: COLORS.primaryDark },
            { title: 'Active Sessions', value: '89', color: COLORS.accent },
            { title: 'System Uptime', value: '99.9%', color: COLORS.success },
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
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              System Alerts
            </h3>
            <div className="space-y-3">
              {[
                { msg: 'Database backup completed', level: 'info', time: '2h ago' },
                { msg: 'Unusual login pattern detected', level: 'warning', time: '5h ago' },
                { msg: 'Server CPU spike resolved', level: 'success', time: '1d ago' },
              ].map((alert, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-2 border-b"
                  style={{ borderColor: COLORS.lightGray }}
                >
                  <div>
                    <p
                      className="text-sm font-medium"
                      style={{
                        color: alert.level === 'warning' ? COLORS.warning
                          : alert.level === 'success' ? COLORS.success
                          : COLORS.primary,
                      }}
                    >
                      {alert.msg}
                    </p>
                  </div>
                  <span className="text-xs" style={{ color: COLORS.gray }}>
                    {alert.time}
                  </span>
                </div>
              ))}
            </div>
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
              Platform Analytics
            </h3>
            <div className="space-y-3">
              {[
                { metric: 'Daily Active Users', value: '412', trend: '+8%' },
                { metric: 'Avg. Session Duration', value: '14m', trend: '+2%' },
                { metric: 'Registration Rate', value: '23/day', trend: '+15%' },
                { metric: 'Goal Completion Rate', value: '67%', trend: '+5%' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-2 border-b"
                  style={{ borderColor: COLORS.lightGray }}
                >
                  <span className="text-sm" style={{ color: COLORS.darkGray }}>
                    {item.metric}
                  </span>
                  <div className="text-right">
                    <span
                      className="text-sm font-semibold"
                      style={{ color: COLORS.primary }}
                    >
                      {item.value}
                    </span>
                    <span className="text-xs ml-2" style={{ color: COLORS.success }}>
                      {item.trend}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
