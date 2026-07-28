import React from 'react';
import { Link } from 'react-router-dom';
import { COLORS, FONTS, RADIUS } from '../shared/theme';
import Button from '../shared/Button';
import logo from '../../assets/econiqueLogo.png';

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'Area-Based Reporting',
    desc: 'Submit cleanup reports with photos and tag the exact area — RTL, NGE, SAL, ALLIED, or any location.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: 'Post & Caption',
    desc: 'Create detailed posts with photos, captions, and descriptions to document environmental issues clearly.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: 'Staff Review',
    desc: 'Staff members review, manage, and resolve reports — updating status from Pending to Done in real time.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Admin Analytics',
    desc: 'Full platform control with user management, staff oversight, system logs, and real-time analytics.',
  },
];

const roles = [
  {
    title: 'User',
    desc: 'Create posts, report cleanup issues with photos, track your report status, and like community posts.',
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
    desc: 'Review user-submitted reports, manage content, update report statuses, and coordinate cleanup efforts.',
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
    desc: 'Full platform control — manage users, staff, view analytics, system logs, and platform settings.',
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
  { value: '5+', label: 'Campus Areas' },
  { value: '3', label: 'User Roles' },
  { value: '100%', label: 'Report Tracking' },
  { value: '24/7', label: 'Platform Access' },
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
            Report. Resolve.{' '}
            <br className="hidden md:block" /> <span style={{ color: COLORS.accent }}>Keep Campus Clean</span>
          </h1>

          <p
            className="text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.85)' }}
          >
            Report, track, and resolve environmental cleanup issues across campus areas.
            Users report problems, staff manages resolution, admins oversee everything.
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
              A role-based platform for reporting, managing, and resolving environmental cleanup issues across campus.
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
              How Cleanup Reporting Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Create a Post', desc: 'Spot a cleanup issue? Create a post with a photo, select the area (RTL, NGE, SAL, ALLIED), and add a caption.' },
              { step: '02', title: 'Staff Reviews', desc: 'Staff members review all submitted posts, check the reported areas, and manage the cleanup workflow.' },
              { step: '03', title: 'Mark as Done', desc: 'Once the issue is resolved, staff updates the status to Done. Users can track their report status in real time.' },
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
            Ready to Keep Our Campus Clean?
          </h2>
          <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Join the community reporting platform. Create an account and start reporting cleanup issues today.
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
              Three roles, three dashboards. Pick the one that matches your access level.
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
