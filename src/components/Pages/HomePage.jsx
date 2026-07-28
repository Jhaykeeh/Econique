import React from 'react';
import { Link } from 'react-router-dom';
import { COLORS, FONTS, RADIUS } from '../shared/theme';
import Button from '../shared/Button';
import logo from '../../assets/econiqueLogo.png';

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Eco Tracking',
    desc: 'Monitor your carbon footprint and track your sustainability goals in real time with detailed analytics.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Community',
    desc: 'Connect with like-minded individuals who share your passion for creating a greener world.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Resources',
    desc: 'Access curated guides, tips, and tools for sustainable everyday living at your fingertips.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Impact Reports',
    desc: 'Visualize the collective impact our community has made on reducing environmental damage.',
  },
];

const roles = [
  {
    title: 'User',
    desc: 'Track your eco habits, report issues, and join the community.',
    path: '/login',
    btnText: 'User Login',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: 'Staff',
    desc: 'Manage content, review reports, and oversee platform operations.',
    path: '/login',
    btnText: 'Staff Login',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: 'Admin',
    desc: 'Full platform control, user management, and system administration.',
    path: '/admin/login',
    btnText: 'Admin Login',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
  },
];

const stats = [
  { value: '10K+', label: 'Active Users' },
  { value: '50K+', label: 'Reports Resolved' },
  { value: '100+', label: 'Areas Cleaned' },
  { value: '98%', label: 'Satisfaction Rate' },
];

export default function HomePage() {
  return (
    <div style={{ fontFamily: FONTS.body }}>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${COLORS.primaryDark} 0%, ${COLORS.primary} 50%, ${COLORS.mintDark} 100%)`,
          minHeight: '90vh',
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute rounded-full"
          style={{ width: '400px', height: '400px', top: '-100px', right: '-100px', backgroundColor: 'rgba(255,255,255,0.05)' }}
        />
        <div
          className="absolute rounded-full"
          style={{ width: '300px', height: '300px', bottom: '-80px', left: '-80px', backgroundColor: 'rgba(255,255,255,0.05)' }}
        />
        <div
          className="absolute rounded-full"
          style={{ width: '200px', height: '200px', top: '40%', left: '10%', backgroundColor: 'rgba(255,255,255,0.03)' }}
        />

        <div className="relative flex flex-col items-center justify-center text-center px-6 py-20" style={{ minHeight: '90vh' }}>
          <div
            className="mb-8 flex items-center justify-center w-28 h-28 rounded-3xl"
            style={{ backgroundColor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}
          >
            <img src={logo} alt="Econique" className="w-20 h-20 object-contain" />
          </div>

          <h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ color: COLORS.white, fontFamily: FONTS.heading }}
          >
            Build a <span style={{ color: COLORS.accent }}>Greener</span>{' '}
            <br className="hidden md:block" /> Future Together
          </h1>

          <p
            className="text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.85)' }}
          >
            Your eco-conscious platform for sustainable living. Report, track, and resolve
            environmental issues — all in one place.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link to="/register">
              <button
                className="py-3.5 px-8 text-sm font-bold border-none cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  backgroundColor: COLORS.accent,
                  color: COLORS.primaryDark,
                  borderRadius: RADIUS.full,
                  fontFamily: FONTS.body,
                  boxShadow: '0 4px 20px rgba(0,200,83,0.4)',
                }}
              >
                Get Started Free
              </button>
            </Link>
            <Link to="/about">
              <button
                className="py-3.5 px-8 text-sm font-semibold cursor-pointer transition-all duration-300 hover:scale-105"
                style={{
                  color: COLORS.white,
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderRadius: RADIUS.full,
                  fontFamily: FONTS.body,
                  backdropFilter: 'blur(4px)',
                }}
              >
                Learn More
              </button>
            </Link>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-bold mb-1" style={{ color: COLORS.accent, fontFamily: FONTS.heading }}>
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6" style={{ backgroundColor: COLORS.white }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: COLORS.offWhite, color: COLORS.primary, fontFamily: FONTS.body }}
            >
              WHY ECONIQUE
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}
            >
              Everything You Need
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: COLORS.gray }}>
              Tools and features designed to make sustainability easy, trackable, and community-driven.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, i) => (
              <div
                key={i}
                className="group p-6 text-center transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: COLORS.offWhite,
                  borderRadius: RADIUS.lg,
                  border: `1px solid ${COLORS.lightGray}`,
                }}
              >
                <div
                  className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: COLORS.primary, color: COLORS.white }}
                >
                  {item.icon}
                </div>
                <h3
                  className="text-base font-bold mb-2"
                  style={{ color: COLORS.black, fontFamily: FONTS.heading }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: COLORS.darkGray }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6" style={{ backgroundColor: COLORS.offWhite }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: COLORS.white, color: COLORS.primary, fontFamily: FONTS.body }}
            >
              HOW IT WORKS
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}
            >
              Simple Steps to a Greener World
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Report', desc: 'Spot a dirty area or trash buildup? Snap a photo and submit a report with the exact location.' },
              { step: '02', title: 'Assign', desc: 'Our staff reviews and assigns the report to the right cleanup team in the designated area.' },
              { step: '03', title: 'Resolved', desc: 'Track the progress in real time. Once cleaned, the status updates to Done automatically.' },
            ].map((item, i) => (
              <div key={i} className="relative">
                <p
                  className="text-6xl font-bold mb-4"
                  style={{ color: COLORS.mintLight, fontFamily: FONTS.heading }}
                >
                  {item.step}
                </p>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: COLORS.darkGray }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 px-6 text-center relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${COLORS.primaryDark} 0%, ${COLORS.primary} 100%)`,
        }}
      >
        <div
          className="absolute rounded-full"
          style={{ width: '300px', height: '300px', top: '-100px', right: '-100px', backgroundColor: 'rgba(255,255,255,0.05)' }}
        />
        <div
          className="absolute rounded-full"
          style={{ width: '250px', height: '250px', bottom: '-80px', left: '-60px', backgroundColor: 'rgba(255,255,255,0.05)' }}
        />

        <div className="relative">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: COLORS.white, fontFamily: FONTS.heading }}
          >
            Ready to Make a Difference?
          </h2>
          <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Join thousands of users committed to building cleaner, greener communities.
          </p>
          <Link to="/register">
            <button
              className="py-3.5 px-10 text-sm font-bold border-none cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: COLORS.accent,
                color: COLORS.primaryDark,
                borderRadius: RADIUS.full,
                fontFamily: FONTS.body,
                boxShadow: '0 4px 20px rgba(0,200,83,0.4)',
              }}
            >
              Register Now
            </button>
          </Link>
        </div>
      </section>

      {/* Sign In by Role */}
      <section className="py-20 px-6" style={{ backgroundColor: COLORS.white }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: COLORS.offWhite, color: COLORS.primary, fontFamily: FONTS.body }}
            >
              SIGN IN
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}
            >
              Choose Your Portal
            </h2>
            <p className="text-base max-w-lg mx-auto" style={{ color: COLORS.gray }}>
              Select your role to access the right dashboard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roles.map((item, i) => (
              <div
                key={i}
                className="group p-8 text-center transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: COLORS.offWhite,
                  borderRadius: RADIUS.lg,
                  border: `2px solid ${COLORS.lightGray}`,
                }}
              >
                <div
                  className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: COLORS.primary, color: COLORS.white }}
                >
                  {item.icon}
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}
                >
                  {item.title}
                </h3>
                <p className="text-sm mb-6 leading-relaxed" style={{ color: COLORS.darkGray }}>
                  {item.desc}
                </p>
                <Link to={item.path}>
                  <button
                    className="w-full py-3 text-sm font-semibold border-none cursor-pointer transition-all duration-300 hover:shadow-md"
                    style={{
                      backgroundColor: COLORS.primary,
                      color: COLORS.white,
                      borderRadius: RADIUS.md,
                      fontFamily: FONTS.body,
                    }}
                  >
                    {item.btnText}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
