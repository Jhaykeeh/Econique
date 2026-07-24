import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/shared/AuthContext';
import Header from '../components/Header';
import LoginCard from '../components/shared/LoginCard';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!email.trim()) errs.email = 'Email is required';
    if (!password.trim()) errs.password = 'Password is required';
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      await login(email, password, 'admin');
      navigate('/admin/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center py-12 px-6" style={{ backgroundColor: '#F1F8E9' }}>
        <LoginCard
          bannerText="Admin Portal"
          title="Admin Sign In"
          subtitle="Secure administration access"
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          onSubmit={handleSubmit}
          errors={errors}
        />
      </div>
    </div>
  );
}
