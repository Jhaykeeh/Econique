import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../components/shared/AuthContext';
import { COLORS, FONTS } from '../components/shared/theme';
import DashboardHeader from '../components/DashboardHeader';
import UserLeftSidebar from './UserLeftSidebar';
import UserRightSidebar from './UserRightSidebar';
import UserMainContent from './UserMainContent';
import UserProfilePage from './UserProfilePage';
import UserSettingsPage from './UserSettingsPage';
import CampusMapPage from './CampusMapPage';
import PostCard from './PostCard';

const userPosts = [
  {
    id: 1,
    text: 'Found scattered styrofoam and plastic bottles near the RTL courtyard. Needs immediate cleanup.',
    area: 'RTL',
    caption: 'Scattered waste near RTL entrance',
    time: '30 minutes ago',
    status: 'Pending',
    likes: 5,
  },
  {
    id: 2,
    text: 'The garbage bins behind NGE are overflowing again. Trash is spilling onto the walkway.',
    area: 'NGE',
    caption: 'Overflowing bins behind NGE building',
    photo: 'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=600',
    time: '1 hour ago',
    status: 'Pending',
    likes: 3,
  },
  {
    id: 3,
    text: 'Broken glass and food wrappers scattered around the SAL benches. This is a safety hazard.',
    area: 'SAL',
    caption: 'Broken glass near SAL benches',
    time: '3 hours ago',
    status: 'Done',
    likes: 8,
  },
  {
    id: 4,
    text: 'Spilled coffee and food waste in the ALLIED hallway near Room 203. Sticky floor.',
    area: 'ALLIED',
    caption: 'Food spill in ALLIED corridor',
    time: '5 hours ago',
    status: 'Pending',
    likes: 2,
  },
  {
    id: 5,
    text: 'Construction debris left blocking the path near the East Wing gate. Unable to pass through.',
    area: 'Others',
    caption: 'Debris blocking East Wing entrance',
    time: '1 day ago',
    status: 'Pending',
    likes: 7,
  },
];

function UserYourPosts() {
  const { user } = useAuth();
  const displayName = user?.name || 'User';

  return (
    <div className="flex-1 p-6 overflow-y-auto" style={{ backgroundColor: COLORS.offWhite }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-1" style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}>
          Your Posts
        </h2>
        <p className="text-sm mb-6" style={{ color: COLORS.darkGray, fontFamily: FONTS.body }}>
          View and manage your published posts.
        </p>

        {userPosts.map((post) => (
          <PostCard
            key={post.id}
            user={displayName}
            text={post.text}
            area={post.area}
            caption={post.caption}
            photo={post.photo}
            time={post.time}
            status={post.status}
            initialLikes={post.likes}
          />
        ))}
      </div>
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
            <Route path="campus-map" element={<CampusMapPage />} />
            <Route path="notifications" element={<UserNotifications />} />
            <Route path="profile" element={<UserProfilePage />} />
            <Route path="settings" element={<UserSettingsPage />} />
          </Routes>
        </div>
        <UserRightSidebar />
      </div>
    </div>
  );
}
