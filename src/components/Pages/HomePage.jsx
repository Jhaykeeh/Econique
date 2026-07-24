import React from 'react';
import { Link } from 'react-router-dom';
import { COLORS, FONTS, RADIUS } from '../shared/theme';
import Button from '../shared/Button';
import logo from '../../assets/econiqueLogo.png';

export default function HomePage() {
  return (
    <div style={{ fontFamily: FONTS.body }}>
      <section
        className="flex flex-col items-center justify-center text-center py-24 px-6"
        style={{ backgroundColor: COLORS.offWhite, minHeight: '70vh' }}
      >
        <img
          src={logo}
          alt="Econique Logo"
          className="w-24 h-24 mb-6 object-contain"
        />
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}
        >
          Welcome to <span style={{ color: COLORS.primary }}>Econique</span>
        </h1>
        <p
          className="text-lg max-w-2xl mb-8 leading-relaxed"
          style={{ color: COLORS.darkGray }}
        >
          Your eco-conscious platform for sustainable living. Join our community
          and make a positive impact on the environment today.
        </p>
        <div className="flex gap-4">
          <Link to="/register">
            <Button>Get Started</Button>
          </Link>
          <Link to="/about">
            <button
              className="py-2.5 px-6 text-sm font-semibold border-2 cursor-pointer transition-all duration-200 hover:opacity-80"
              style={{
                color: COLORS.primary,
                backgroundColor: COLORS.white,
                borderColor: COLORS.primary,
                borderRadius: RADIUS.full,
                fontFamily: FONTS.body,
              }}
            >
              Learn More
            </button>
          </Link>
        </div>
      </section>

      <section className="py-16 px-6">
        <h2
          className="text-2xl font-bold text-center mb-12"
          style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}
        >
          Why Econique?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: 'Eco Tracking', desc: 'Monitor your carbon footprint and track your sustainability goals in real time.' },
            { title: 'Community', desc: 'Connect with like-minded individuals who share your passion for the planet.' },
            { title: 'Resources', desc: 'Access curated guides, tips, and tools for sustainable everyday living.' },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 text-center"
              style={{
                backgroundColor: COLORS.white,
                borderRadius: RADIUS.lg,
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}
            >
              <div
                className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full text-white text-lg font-bold"
                style={{ backgroundColor: COLORS.mintDark }}
              >
                {i + 1}
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: COLORS.black, fontFamily: FONTS.heading }}
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

      <section
        className="py-16 px-6 text-center"
        style={{ backgroundColor: COLORS.lightGray }}
      >
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}
        >
          Ready to Make a Difference?
        </h2>
        <p className="text-sm mb-6" style={{ color: COLORS.darkGray }}>
          Join thousands of users committed to a greener future.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/register">
            <Button>Register Now</Button>
          </Link>
        </div>
      </section>

      <section className="py-16 px-6">
        <h2
          className="text-2xl font-bold text-center mb-8"
          style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}
        >
          Sign In by Role
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { title: 'User', desc: 'Track your eco habits and join the community.', path: '/login', btnText: 'User Login' },
            { title: 'Staff', desc: 'Manage content, users, and platform operations.', path: '/login', btnText: 'Staff Login' },
            { title: 'Admin', desc: 'Full platform control and system administration.', path: '/admin/login', btnText: 'Admin Login' },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 text-center"
              style={{
                backgroundColor: COLORS.white,
                borderRadius: RADIUS.lg,
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}
            >
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: COLORS.primary, fontFamily: FONTS.heading }}
              >
                {item.title}
              </h3>
              <p className="text-sm mb-4" style={{ color: COLORS.darkGray }}>
                {item.desc}
              </p>
              <Link to={item.path}>
                <Button>{item.btnText}</Button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
