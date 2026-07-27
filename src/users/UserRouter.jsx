import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardHeader from '../components/DashboardHeader';
import UserLeftSidebar from './UserLeftSidebar';
import UserRightSidebar from './UserRightSidebar';
import UserMainContent from './UserMainContent';

function UserYourPosts() {
  return (
    <div className="flex-1 p-6" style={{ backgroundColor: '#F1F8E9' }}>
      <h2 className="text-xl font-bold" style={{ color: '#1B5E20' }}>Your Posts</h2>
      <p className="text-sm mt-2" style={{ color: '#424242' }}>View and manage your published posts.</p>
    </div>
  );
}

function UserPostStatus() {
  return (
    <div className="flex-1 p-6" style={{ backgroundColor: '#F1F8E9' }}>
      <h2 className="text-xl font-bold" style={{ color: '#1B5E20' }}>Post Status</h2>
      <p className="text-sm mt-2" style={{ color: '#424242' }}>Check the status of your submitted posts.</p>
    </div>
  );
}

function UserNotifications() {
  return (
    <div className="flex-1 p-6" style={{ backgroundColor: '#F1F8E9' }}>
      <h2 className="text-xl font-bold" style={{ color: '#1B5E20' }}>Notifications</h2>
      <p className="text-sm mt-2" style={{ color: '#424242' }}>Stay updated with your latest notifications.</p>
    </div>
  );
}

export default function UserRouter() {
  return (
    <div style={{ backgroundColor: '#F1F8E9' }}>
      <DashboardHeader role="user" />
      <div className="flex pt-14" style={{ height: '100vh', overflow: 'hidden' }}>
        <UserLeftSidebar />
        <div className="flex-1 sticky top-14 max-h-[calc(100vh-56px)] overflow-y-auto">
          <Routes>
            <Route index element={<UserMainContent />} />
            <Route path="your-posts" element={<UserYourPosts />} />
            <Route path="post-status" element={<UserPostStatus />} />
            <Route path="notifications" element={<UserNotifications />} />
          </Routes>
        </div>
        <UserRightSidebar />
      </div>
    </div>
  );
}
