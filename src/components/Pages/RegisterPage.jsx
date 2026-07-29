import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../shared/AuthContext';
import { COLORS, FONTS, RADIUS } from '../shared/theme';
import Header from '../Header';
import Footer from '../Footer';
import FormInput from '../shared/FormInput';
import Button from '../shared/Button';

export default function RegisterPage({ defaultRole }) {
  const [role, setRole] = useState(defaultRole || 'user');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!firstName.trim()) errs.firstName = 'Firstname is required';
    if (!lastName.trim()) errs.lastName = 'Lastname is required';
    if (!email.trim()) errs.email = 'Email is required';
    if (!password.trim()) errs.password = 'Password is required';
    if (password !== confirmPassword) errs.confirmPassword = 'Passwords do not match';
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      await register(firstName.trim(), lastName.trim(), email, password, role);
      navigate(role === 'staff' ? '/staff/dashboard' : '/dashboard');
    }
  };

  const toggleStyle = (active) => ({
    flex: 1,
    padding: '10px 0',
    textAlign: 'center',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: active ? 600 : 400,
    fontFamily: FONTS.body,
    color: active ? COLORS.white : COLORS.darkGray,
    backgroundColor: active ? COLORS.primary : COLORS.lightGray,
    border: 'none',
    borderRadius: active ? RADIUS.md : '0',
    transition: 'all 0.25s ease',
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div
        className="flex-1 flex items-center justify-center py-12 px-6"
        style={{ backgroundColor: COLORS.offWhite }}
      >
        <div
          className="w-full max-w-md mx-auto overflow-hidden"
          style={{ borderRadius: RADIUS.lg, boxShadow: '0 4px 24px rgba(0,0,0,0.1)' }}
        >
          <div
            className="py-5 px-6 text-center"
            style={{ backgroundColor: role === 'staff' ? COLORS.primaryDark : COLORS.primary }}
          >
            <h2
              className="text-xl font-bold text-white"
              style={{ fontFamily: FONTS.heading }}
            >
              Join Econique
            </h2>
          </div>

          <div className="p-8 bg-white">
            {!defaultRole && (
              <div
                className="flex overflow-hidden mb-6"
                style={{ borderRadius: RADIUS.md }}
              >
                <button
                  type="button"
                  onClick={() => setRole('user')}
                  style={toggleStyle(role === 'user')}
                >
                  User
                </button>
                <button
                  type="button"
                  onClick={() => setRole('staff')}
                  style={toggleStyle(role === 'staff')}
                >
                  Staff
                </button>
              </div>
            )}

            <h3
              className="text-lg font-semibold text-center mb-1"
              style={{ color: COLORS.black, fontFamily: FONTS.heading }}
            >
              Create Account
            </h3>
            <p
              className="text-sm text-center mb-6"
              style={{ color: COLORS.gray, fontFamily: FONTS.body }}
            >
              {role === 'staff'
                ? 'Join the Econique staff team'
                : 'Start your eco journey today'}
            </p>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-3">
                <FormInput
                  label="Firstname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Firstname"
                  error={errors.firstName}
                />
                <FormInput
                  label="Lastname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Lastname"
                  error={errors.lastName}
                />
              </div>
              <FormInput
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                error={errors.email}
              />
              <FormInput
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                error={errors.password}
              />
              <FormInput
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                error={errors.confirmPassword}
              />

              <div className="mt-6">
                <Button type="submit" fullWidth>
                  Sign Up
                </Button>
              </div>
            </form>

            <p
              className="text-sm text-center mt-5"
              style={{ color: COLORS.gray, fontFamily: FONTS.body }}
            >
              Already have an account?{' '}
              <Link
                to={role === 'staff' ? '/staff-login' : '/user-login'}
                className="font-semibold hover:underline"
                style={{ color: COLORS.primary }}
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
