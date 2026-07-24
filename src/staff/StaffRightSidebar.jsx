import React from 'react';
import { COLORS, FONTS, RADIUS } from '../components/shared/theme';

export default function StaffRightSidebar() {
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
          Staff Announcements
        </h4>
        <ul className="text-xs space-y-2" style={{ color: COLORS.darkGray }}>
          <li>📋 Quarterly review — Aug 1</li>
          <li>🆕 New content guidelines published</li>
          <li>🎉 Team meeting — Every Friday 10am</li>
        </ul>
      </div>

      <div
        className="p-4"
        style={{ backgroundColor: COLORS.offWhite, borderRadius: RADIUS.md }}
      >
        <h4
          className="text-sm font-semibold mb-2"
          style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}
        >
          Quick Stats
        </h4>
        <div className="space-y-2">
          {[
            { label: 'Active Users', value: '1,247' },
            { label: 'Pending Reports', value: '12' },
            { label: 'Events This Month', value: '5' },
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
          Recent Tickets
        </h4>
        <div className="space-y-2">
          {[
            { id: '#1042', subject: 'Login issue', status: 'Open' },
            { id: '#1039', subject: 'Goal not syncing', status: 'Pending' },
            { id: '#1035', subject: 'Profile update', status: 'Resolved' },
          ].map((ticket, i) => (
            <div key={i} className="flex justify-between items-center text-xs" style={{ color: COLORS.darkGray }}>
              <span>{ticket.id} {ticket.subject}</span>
              <span
                className="font-semibold"
                style={{
                  color: ticket.status === 'Resolved' ? COLORS.success
                    : ticket.status === 'Open' ? COLORS.primary
                    : COLORS.warning,
                }}
              >
                {ticket.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
