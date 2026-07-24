import React from 'react';
import { COLORS, FONTS, RADIUS } from '../shared/theme';

export default function AboutPage() {
  return (
    <div style={{ fontFamily: FONTS.body }}>
      <section
        className="py-20 px-6 text-center"
        style={{ backgroundColor: COLORS.offWhite }}
      >
        <h1
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}
        >
          About Econique
        </h1>
        <p
          className="text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: COLORS.darkGray }}
        >
          Econique is on a mission to empower individuals and communities
          to adopt sustainable practices through technology and education.
        </p>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2
          className="text-2xl font-bold mb-6"
          style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}
        >
          Our Mission
        </h2>
        <p className="text-sm leading-relaxed mb-8" style={{ color: COLORS.darkGray }}>
          We believe that every small action contributes to a healthier planet.
          Econique provides the tools, community, and resources you need to
          integrate eco-friendly habits into your daily life. From tracking
          your carbon footprint to connecting with local sustainability
          initiatives, we make going green simple and rewarding.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Sustainability First',
              desc: 'Every feature we build is evaluated through the lens of environmental impact and user benefit.',
            },
            {
              title: 'Community Driven',
              desc: 'Our platform thrives on the collective wisdom and action of our growing global community.',
            },
            {
              title: 'Data Transparency',
              desc: 'We provide clear, actionable insights so you can see the real impact of your efforts.',
            },
            {
              title: 'Inclusive Access',
              desc: 'Sustainability is for everyone. We design our tools to be accessible and easy to use.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-5"
              style={{
                backgroundColor: COLORS.lightGray,
                borderRadius: RADIUS.md,
                borderLeft: `4px solid ${COLORS.primary}`,
              }}
            >
              <h3
                className="text-base font-semibold mb-2"
                style={{ color: COLORS.primary, fontFamily: FONTS.heading }}
              >
                {item.title}
              </h3>
              <p className="text-sm" style={{ color: COLORS.darkGray }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
