import React from 'react';
import { COLORS, FONTS, RADIUS } from './theme';
import FormInput from './FormInput';
import Button from './Button';

export default function LoginCard({ title, subtitle, email, setEmail, password, setPassword, onSubmit, errors, bannerText, linkText, linkPath, LinkComponent }) {
  return (
    <div
      className="w-full max-w-md mx-auto overflow-hidden"
      style={{ borderRadius: RADIUS.lg, boxShadow: '0 4px 24px rgba(0,0,0,0.1)' }}
    >
      <div
        className="py-5 px-6 text-center"
        style={{ backgroundColor: COLORS.primary }}
      >
        <h2
          className="text-xl font-bold text-white"
          style={{ fontFamily: FONTS.heading }}
        >
          {bannerText || 'Welcome Back'}
        </h2>
      </div>

      <div className="p-8 bg-white">
        <h3
          className="text-lg font-semibold text-center mb-1"
          style={{ color: COLORS.black, fontFamily: FONTS.heading }}
        >
          {title || 'Sign In'}
        </h3>
        {subtitle && (
          <p
            className="text-sm text-center mb-6"
            style={{ color: COLORS.gray, fontFamily: FONTS.body }}
          >
            {subtitle}
          </p>
        )}

        <form onSubmit={onSubmit}>
          <FormInput
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            error={errors?.email}
          />
          <FormInput
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            error={errors?.password}
          />

          <div className="mt-6">
            <Button type="submit" fullWidth>
              Sign In
            </Button>
          </div>
        </form>

        {LinkComponent && linkText && (
          <p
            className="text-sm text-center mt-5"
            style={{ color: COLORS.gray, fontFamily: FONTS.body }}
          >
            {linkText}{' '}
            <LinkComponent
              to={linkPath}
              className="font-semibold hover:underline"
              style={{ color: COLORS.primary }}
            >
              {linkPath.includes('register') ? 'Sign Up' : 'Sign In'}
            </LinkComponent>
          </p>
        )}
      </div>
    </div>
  );
}
