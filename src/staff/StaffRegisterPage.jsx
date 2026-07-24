import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/shared/AuthContext';
import { COLORS, FONTS, RADIUS } from '../components/shared/theme';
import Header from '../components/Header';
import FormInput from '../components/shared/FormInput';
import Button from '../components/shared/Button';

export default function StaffRegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!name.trim()) errs.name = 'Name is required';
    if (!email.trim()) errs.email = 'Email is required';
    if (!password.trim()) errs.password = 'Password is required';
    if (password !== confirmPassword) errs.confirmPassword = 'Passwords do not match';
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      await register(name, email, password, 'staff');
      navigate('/staff/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center py-12 px-6" style={{ backgroundColor: COLORS.offWhite }}>
        <div
          className="w-full max-w-md mx-auto overflow-hidden"
          style={{ borderRadius: RADIUS.lg, boxShadow: '0 4px 24px rgba(0,0,0,0.1)' }}
        >
          <div
            className="py-5 px-6 text-center"
            style={{ backgroundColor: COLORS.primaryDark }}
          >
            <h2
              className="text-xl font-bold text-white"
              style={{ fontFamily: FONTS.heading }}
            >
              Staff Registration
            </h2>
          </div>

          <div className="p-8 bg-white">
            <h3
              className="text-lg font-semibold text-center mb-1"
              style={{ color: COLORS.black, fontFamily: FONTS.heading }}
            >
              Create Staff Account
            </h3>
            <p
              className="text-sm text-center mb-6"
              style={{ color: COLORS.gray, fontFamily: FONTS.body }}
            >
              Join the Econique staff team
            </p>

            <form onSubmit={handleSubmit}>
              <FormInput
                label="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                error={errors.name}
              />
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
                  Register as Staff
                </Button>
              </div>
            </form>

            <p
              className="text-sm text-center mt-5"
              style={{ color: COLORS.gray, fontFamily: FONTS.body }}
            >
              Already have a staff account?{' '}
              <Link
                to="/staff/login"
                className="font-semibold hover:underline"
                style={{ color: COLORS.primary }}
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
