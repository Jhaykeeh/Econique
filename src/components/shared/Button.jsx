import React from 'react';
import { COLORS, FONTS, RADIUS } from './theme';

export default function Button({ children, onClick, type = 'button', fullWidth = false, disabled = false }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`py-2.5 px-6 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98] ${fullWidth ? 'w-full' : ''}`}
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: RADIUS.full,
        fontFamily: FONTS.body,
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      {children}
    </button>
  );
}
