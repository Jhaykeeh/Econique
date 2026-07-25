import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardHeader from '../components/DashboardHeader';
import UserLeftSidebar from './UserLeftSidebar';
import UserRightSidebar from './UserRightSidebar';
import UserMainContent from './UserMainContent';

function UserProfile() {
  return (
    <div className="flex-1 p-6" style={{ backgroundColor: '#F1F8E9' }}>
      <h2 className="text-xl font-bold" style={{ color: '#1B5E20' }}>Your Profile</h2>
      <p className="text-sm mt-2" style={{ color: '#424242' }}>Manage your account settings and preferences.</p>
    </div>
  );
}

function UserGoals() {
  return (
    <div className="flex-1 p-6" style={{ backgroundColor: '#F1F8E9' }}>
      <h2 className="text-xl font-bold" style={{ color: '#1B5E20' }}>Eco Goals</h2>
      <p className="text-sm mt-2" style={{ color: '#424242' }}>Set and track your sustainability targets.</p>
    </div>
  );
}

function UserActivities() {
  return (
    <div className="flex-1 p-6" style={{ backgroundColor: '#F1F8E9' }}>
      <h2 className="text-xl font-bold" style={{ color: '#1B5E20' }}>Activities</h2>
      <p className="text-sm mt-2" style={{ color: '#424242' }}>Log and review your eco-friendly activities.</p>
    </div>
  );
}

function UserCommunity() {
  return (
    <div className="flex-1 p-6" style={{ backgroundColor: '#F1F8E9' }}>
      <h2 className="text-xl font-bold" style={{ color: '#1B5E20' }}>Community</h2>
      <p className="text-sm mt-2" style={{ color: '#424242' }}>Connect with other eco-conscious users.</p>
    </div>
  );
}

export default function UserRouter() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F1F8E9' }}>
      <DashboardHeader role="user" />
      <div className="flex pt-14">
        <UserLeftSidebar />
        <Routes>
          <Route index element={<UserMainContent />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="goals" element={<UserGoals />} />
          <Route path="activities" element={<UserActivities />} />
          <Route path="community" element={<UserCommunity />} />
        </Routes>
        <UserRightSidebar />
      </div>
    </div>
  );
}
