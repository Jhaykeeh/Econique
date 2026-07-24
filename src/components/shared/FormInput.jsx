import React from 'react';
import { COLORS, FONTS, RADIUS } from './theme';

export default function FormInput({ label, type = 'text', value, onChange, placeholder, error }) {
  return (
    <div className="w-full mb-4">
      {label && (
        <label
          className="block mb-1 text-sm font-medium"
          style={{ color: COLORS.darkGray, fontFamily: FONTS.body }}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 text-sm border outline-none transition-colors duration-200"
        style={{
          borderColor: error ? COLORS.error : COLORS.mint,
          borderRadius: RADIUS.md,
          fontFamily: FONTS.body,
          backgroundColor: COLORS.white,
          color: COLORS.black,
        }}
        onFocus={(e) => (e.target.style.borderColor = COLORS.primary)}
        onBlur={(e) => (e.target.style.borderColor = error ? COLORS.error : COLORS.mint)}
      />
      {error && (
        <p className="mt-1 text-xs" style={{ color: COLORS.error }}>
          {error}
        </p>
      )}
    </div>
  );
}
