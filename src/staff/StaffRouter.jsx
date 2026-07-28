import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../components/shared/AuthContext';
import { COLORS, FONTS, RADIUS } from '../components/shared/theme';
import DashboardHeader from '../components/DashboardHeader';
import StaffLeftSidebar from './StaffLeftSidebar';
import StaffRightSidebar from './StaffRightSidebar';
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

function StaffOverview() {
  const { user } = useAuth();
  const [posts, setPosts] = useState(initialPosts);

  const handleStatusUpdate = (postId, newStatus, proofUrl) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId ? { ...post, status: newStatus, proofUrl: proofUrl || post.proofUrl } : post
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
            proofUrl={post.proofUrl}
            role="staff"
            onStatusUpdate={(newStatus, proofUrl) => handleStatusUpdate(post.id, newStatus, proofUrl)}
          />
        ))}
      </div>
    </main>
  );
}

function StaffReports() {
  const [posts] = useState(initialPosts);
  const donePosts = posts.filter((p) => p.status === 'Done');
  const [viewProofUrl, setViewProofUrl] = useState(null);

  return (
    <main className="flex-1 p-6 overflow-y-auto" style={{ backgroundColor: COLORS.offWhite }}>
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-2xl font-bold mb-1"
          style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}
        >
          Completed Reports
        </h1>
        <p className="text-sm mb-6" style={{ color: COLORS.darkGray, fontFamily: FONTS.body }}>
          {donePosts.length} report{donePosts.length !== 1 ? 's' : ''} marked as Done.
        </p>

        {donePosts.length === 0 ? (
          <p className="text-sm mt-8 text-center" style={{ color: COLORS.gray }}>
            No completed reports yet.
          </p>
        ) : (
          <div className="flex flex-col gap-3">
            {donePosts.map((post) => (
              <div
                key={post.id}
                className="flex items-center justify-between p-4"
                style={{
                  backgroundColor: COLORS.white,
                  borderRadius: RADIUS.lg,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                }}
              >
                <p className="text-sm font-medium" style={{ color: COLORS.primaryDark, fontFamily: FONTS.body }}>
                  <span style={{ color: COLORS.primary, fontWeight: 600 }}>{post.user}</span>
                  <span style={{ color: COLORS.darkGray }}> completed by you.</span>
                </p>
                <div className="flex items-center gap-2">
                  {post.proofUrl && (
                    <button
                      onClick={() => setViewProofUrl(post.proofUrl)}
                      className="flex items-center gap-1 px-3 py-1 border-none rounded-lg cursor-pointer text-xs font-semibold transition-all hover:opacity-80"
                      style={{ backgroundColor: COLORS.mintLight, color: COLORS.primaryDark, fontFamily: FONTS.body }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                      Proof
                    </button>
                  )}
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#E8F5E9', color: COLORS.success, fontFamily: FONTS.body }}
                  >
                    {post.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* View Proof Modal */}
      {viewProofUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={() => setViewProofUrl(null)}
        >
          <div
            className="w-full max-w-lg mx-4"
            style={{
              backgroundColor: COLORS.white,
              borderRadius: RADIUS.lg,
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              overflow: 'hidden',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="flex items-center justify-between p-4"
              style={{ borderBottom: `1px solid ${COLORS.lightGray}` }}
            >
              <h3 className="text-base font-bold" style={{ color: COLORS.black, fontFamily: FONTS.heading }}>
                Cleanup Proof
              </h3>
              <button
                onClick={() => setViewProofUrl(null)}
                className="w-8 h-8 flex items-center justify-center border-none rounded-full cursor-pointer text-lg"
                style={{ backgroundColor: COLORS.offWhite, color: COLORS.gray }}
              >
                ✕
              </button>
            </div>
            <img
              src={viewProofUrl}
              alt="Cleanup proof"
              className="w-full max-h-96 object-contain p-4"
            />
          </div>
        </div>
      )}
    </main>
  );
}

function StaffContent() {
  return (
    <main className="flex-1 p-6 overflow-y-auto" style={{ backgroundColor: COLORS.offWhite }}>
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-2xl font-bold mb-2"
          style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}
        >
          Content Management
        </h1>
        <p className="text-sm" style={{ color: COLORS.darkGray, fontFamily: FONTS.body }}>
          Manage platform content and resources.
        </p>
      </div>
    </main>
  );
}

function StaffEvents() {
  return (
    <main className="flex-1 p-6 overflow-y-auto" style={{ backgroundColor: COLORS.offWhite }}>
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-2xl font-bold mb-2"
          style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}
        >
          Events
        </h1>
        <p className="text-sm" style={{ color: COLORS.darkGray, fontFamily: FONTS.body }}>
          View and manage upcoming clean-up events.
        </p>
      </div>
    </main>
  );
}

export default function StaffRouter() {
  return (
    <div style={{ backgroundColor: COLORS.offWhite }}>
      <DashboardHeader role="staff" />
      <div className="flex pt-14" style={{ height: '100vh', overflow: 'hidden' }}>
        <StaffLeftSidebar />
        <div className="flex-1 sticky top-14 max-h-[calc(100vh-56px)] overflow-y-auto">
          <Routes>
            <Route index element={<StaffOverview />} />
            <Route path="content" element={<StaffContent />} />
            <Route path="reports" element={<StaffReports />} />
            <Route path="events" element={<StaffEvents />} />
          </Routes>
        </div>
        <StaffRightSidebar />
      </div>
    </div>
  );
}
