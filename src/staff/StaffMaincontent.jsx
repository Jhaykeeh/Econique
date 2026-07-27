import React, { useState } from 'react';
import { useAuth } from '../components/shared/AuthContext';
import { COLORS, FONTS, RADIUS } from '../components/shared/theme';
import PostCard from '../users/PostCard';

const initialPosts = [
  {
    id: 1,
    user: 'Maria Santos',
    text: "There's a pile of uncollected garbage near the riverside walkway. It's been here for 3 days already and it's starting to smell.",
    area: 'RTL',
    caption: 'Please send someone to clean this up ASAP',
    time: '2 hours ago',
    status: 'Pending',
    likes: 12,
  },
  {
    id: 2,
    user: 'Juan Dela Cruz',
    text: 'The dumpster behind NGE building is overflowing. Trash is scattered all over the parking area.',
    area: 'NGE',
    caption: 'Overflowing waste bins need immediate attention',
    photo: 'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=600',
    time: '5 hours ago',
    status: 'Done',
    likes: 24,
  },
  {
    id: 3,
    user: 'Ana Reyes',
    text: 'There are broken glass bottles and plastic waste scattered around the SAL courtyard. Could be a hazard for students.',
    area: 'SAL',
    caption: 'Safety hazard — needs cleanup',
    time: '1 day ago',
    status: 'Pending',
    likes: 8,
  },
  {
    id: 4,
    user: 'Carlo Mendoza',
    text: 'The ALLIED hallway has spilled coffee and food waste on the floor near the vending machines.',
    area: 'ALLIED',
    caption: 'Spilled food waste near vending area',
    time: '2 days ago',
    status: 'Done',
    likes: 15,
  },
  {
    id: 5,
    user: 'Elena Garcia',
    text: "There's a large amount of construction debris left near the East Wing entrance. It's blocking the walkway.",
    area: 'Others',
    caption: 'East Wing entrance — construction debris blocking path',
    time: '3 days ago',
    status: 'Pending',
    likes: 6,
  },
];

export default function StaffMaincontent() {
  const { user } = useAuth();
  const [posts, setPosts] = useState(initialPosts);

  const handleStatusUpdate = (postId, newStatus) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId ? { ...post, status: newStatus } : post
      )
    );
  };

  const pendingCount = posts.filter((p) => p.status === 'Pending').length;
  const doneCount = posts.filter((p) => p.status === 'Done').length;

  return (
    <main className="flex-1 p-6 overflow-y-auto" style={{ backgroundColor: COLORS.offWhite }}>
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-2xl font-bold mb-2"
          style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}
        >
          Staff Dashboard
        </h1>
        <p className="text-sm mb-6" style={{ color: COLORS.darkGray, fontFamily: FONTS.body }}>
          Welcome, {user?.name || 'Staff Member'}. Review and manage user-submitted cleanup reports.
        </p>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div
            className="p-5"
            style={{ backgroundColor: COLORS.white, borderRadius: RADIUS.lg, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
          >
            <p className="text-xs mb-1" style={{ color: COLORS.gray, fontFamily: FONTS.body }}>Total Reports</p>
            <p className="text-2xl font-bold" style={{ color: COLORS.primary, fontFamily: FONTS.heading }}>{posts.length}</p>
          </div>
          <div
            className="p-5"
            style={{ backgroundColor: COLORS.white, borderRadius: RADIUS.lg, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
          >
            <p className="text-xs mb-1" style={{ color: COLORS.gray, fontFamily: FONTS.body }}>Pending</p>
            <p className="text-2xl font-bold" style={{ color: COLORS.warning, fontFamily: FONTS.heading }}>{pendingCount}</p>
          </div>
          <div
            className="p-5"
            style={{ backgroundColor: COLORS.white, borderRadius: RADIUS.lg, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
          >
            <p className="text-xs mb-1" style={{ color: COLORS.gray, fontFamily: FONTS.body }}>Completed</p>
            <p className="text-2xl font-bold" style={{ color: COLORS.success, fontFamily: FONTS.heading }}>{doneCount}</p>
          </div>
        </div>

        {/* Posts */}
        {posts.map((post) => (
          <PostCard
            key={post.id}
            user={post.user}
            text={post.text}
            area={post.area}
            caption={post.caption}
            photo={post.photo}
            time={post.time}
            status={post.status}
            initialLikes={post.likes}
            role="staff"
            onStatusUpdate={(newStatus) => handleStatusUpdate(post.id, newStatus)}
          />
        ))}
      </div>
    </main>
  );
}
