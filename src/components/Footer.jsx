import React from 'react';
import { COLORS, FONTS } from './shared/theme';

export default function Footer() {
  return (
    <footer
      className="py-8 px-6 text-center"
      style={{ backgroundColor: COLORS.primaryDark, color: COLORS.mintLight }}
    >
      <div className="max-w-4xl mx-auto">
        <p
          className="text-sm mb-2"
          style={{ fontFamily: FONTS.body }}
        >
          &copy; {new Date().getFullYear()} Econique. All rights reserved.
        </p>
        <p
          className="text-xs"
          style={{ color: COLORS.mint, fontFamily: FONTS.body }}
        >
          Building a sustainable future, one step at a time.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="#privacy"
            className="text-xs no-underline hover:underline"
            style={{ color: COLORS.mintLight }}
          >
            Privacy Policy
          </a>
          <a
            href="#terms"
            className="text-xs no-underline hover:underline"
            style={{ color: COLORS.mintLight }}
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
