import React, { useState, useRef } from 'react';
import { useAuth } from '../components/shared/AuthContext';
import { COLORS, FONTS, RADIUS } from '../components/shared/theme';
import userIcon from '../assets/user.png';

export default function UserMainContent() {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState('');
  const [photoPreview, setPhotoPreview] = useState(null);
  const [selectedArea, setSelectedArea] = useState('');
  const [caption, setCaption] = useState('');
  const fileInputRef = useRef(null);

  const displayName = user?.name || 'User';

  const handlePost = () => {
    const text = modalText.trim();
    if (!text && !photoPreview) return;
    setPosts([{ id: Date.now(), text, photo: photoPreview, area: selectedArea, caption: caption.trim(), time: 'Just now' }, ...posts]);
    setModalText('');
    setPhotoPreview(null);
    setSelectedArea('');
    setCaption('');
    setShowModal(false);
  };

  const handlePhotoSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPhotoPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="flex-1 p-6" style={{ backgroundColor: COLORS.offWhite }}>
      <div className="max-w-4xl mx-auto">
        {/* Create Post - Click to open modal */}
        <div
          className="p-4 mb-6 cursor-pointer"
          onClick={() => setShowModal(true)}
          style={{
            backgroundColor: COLORS.white,
            borderRadius: RADIUS.lg,
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          }}
        >
          <div className="flex items-center gap-3">
            <img
              src={userIcon}
              alt={displayName}
              className="w-10 h-10 rounded-full object-cover shrink-0"
            />
            <div
              className="flex-1 text-sm py-2 px-3 rounded-full"
              style={{ backgroundColor: COLORS.offWhite, color: COLORS.gray, fontFamily: FONTS.body }}
            >
              What's on your mind?
            </div>
          </div>
        </div>

        {/* Create Post Modal */}
        {showModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                  onClick={() => { setShowModal(false); setPhotoPreview(null); setModalText(''); setSelectedArea(''); setCaption(''); }}
          >
            <div
              className="w-full max-w-lg mx-4"
              style={{
                backgroundColor: COLORS.white,
                borderRadius: RADIUS.lg,
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between p-4"
                style={{ borderBottom: `1px solid ${COLORS.lightGray}` }}
              >
                <h3 className="text-base font-bold" style={{ color: COLORS.black, fontFamily: FONTS.heading }}>
                  Create Post
                </h3>
                <button
            onClick={() => { setShowModal(false); setPhotoPreview(null); setModalText(''); setSelectedArea(''); setCaption(''); }}
                  className="w-8 h-8 flex items-center justify-center border-none rounded-full cursor-pointer text-lg"
                  style={{ backgroundColor: COLORS.offWhite, color: COLORS.gray }}
                >
                  ✕
                </button>
              </div>

              {/* User info + textarea */}
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={userIcon}
                    alt={displayName}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="text-sm font-semibold" style={{ color: COLORS.black, fontFamily: FONTS.heading }}>
                    {displayName}
                  </span>
                </div>
                <textarea
                  value={modalText}
                  onChange={(e) => setModalText(e.target.value)}
                  placeholder="What's on your mind?"
                  autoFocus
                  rows={4}
                  className="w-full resize-none border-none outline-none text-sm p-2 rounded-lg"
                  style={{
                    backgroundColor: 'transparent',
                    color: COLORS.black,
                    fontFamily: FONTS.body,
                    fontSize: '16px',
                  }}
                />

                {/* Choose Area */}
                <div className="mt-3">
                  <label className="text-xs font-semibold block mb-1" style={{ color: COLORS.darkGray, fontFamily: FONTS.body }}>
                    Choose Area
                  </label>
                  <select
                    value={selectedArea}
                    onChange={(e) => setSelectedArea(e.target.value)}
                    className="w-full border-none outline-none text-sm p-2 rounded-lg cursor-pointer"
                    style={{
                      backgroundColor: COLORS.offWhite,
                      color: selectedArea ? COLORS.black : COLORS.gray,
                      fontFamily: FONTS.body,
                    }}
                  >
                    <option value="">Select an area</option>
                    <option value="Recycling">Recycling</option>
                    <option value="Energy">Energy</option>
                    <option value="Water">Water</option>
                    <option value="Transport">Transport</option>
                    <option value="Food">Food</option>
                    <option value="General">General</option>
                  </select>
                </div>

                {/* Add Captions */}
                <div className="mt-3">
                  <label className="text-xs font-semibold block mb-1" style={{ color: COLORS.darkGray, fontFamily: FONTS.body }}>
                    Add Captions
                  </label>
                  <input
                    type="text"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder="Write a caption..."
                    className="w-full border-none outline-none text-sm p-2 rounded-lg"
                    style={{
                      backgroundColor: COLORS.offWhite,
                      color: COLORS.black,
                      fontFamily: FONTS.body,
                    }}
                  />
                </div>

                {/* Photo preview */}
                {photoPreview && (
                  <div className="relative mt-2">
                    <img
                      src={photoPreview}
                      alt="Preview"
                      className="w-full max-h-60 object-cover rounded-lg"
                    />
                    <button
                      onClick={() => setPhotoPreview(null)}
                      className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center border-none rounded-full cursor-pointer text-xs"
                      style={{ backgroundColor: COLORS.white, color: COLORS.gray, boxShadow: '0 1px 4px rgba(0,0,0,0.2)' }}
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>

              {/* Add Photo + Post */}
              <div
                className="flex items-center justify-between p-4 mx-4 mb-4 rounded-lg"
                style={{ border: `1px solid ${COLORS.lightGray}` }}
              >
                <span className="text-sm font-medium" style={{ color: COLORS.black, fontFamily: FONTS.body }}>
                  Add to your post
                </span>
                <div className="flex items-center gap-2">
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handlePhotoSelect}
                    className="hidden"
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-1.5 px-3 py-1.5 border-none rounded-lg cursor-pointer text-sm font-medium transition-colors"
                    style={{ backgroundColor: COLORS.offWhite, color: COLORS.primary, fontFamily: FONTS.body }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M21 19V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2zM8.5 13.5l2.5 3 3.5-4.5 4.5 6H5l3.5-4.5z"/>
                    </svg>
                    Photo
                  </button>
                  <button
                    onClick={handlePost}
                    disabled={!modalText.trim() && !photoPreview}
                    className="px-4 py-1.5 border-none rounded-lg text-sm font-semibold cursor-pointer transition-all"
                    style={{
                      backgroundColor: (modalText.trim() || photoPreview) ? COLORS.primary : COLORS.lightGray,
                      color: (modalText.trim() || photoPreview) ? COLORS.white : COLORS.gray,
                      fontFamily: FONTS.body,
                    }}
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* User Posts */}
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-4 mb-4"
            style={{
              backgroundColor: COLORS.white,
              borderRadius: RADIUS.lg,
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <img
                src={userIcon}
                alt={displayName}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold" style={{ color: COLORS.black, fontFamily: FONTS.heading }}>
                  {displayName}
                </p>
                <p className="text-xs" style={{ color: COLORS.gray }}>{post.time}</p>
              </div>
            </div>
            {post.text && (
              <p className="text-sm leading-relaxed mb-3" style={{ color: COLORS.black, fontFamily: FONTS.body }}>
                {post.text}
              </p>
            )}
            {post.area && (
              <span
                className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-2"
                style={{ backgroundColor: COLORS.primaryLight, color: COLORS.primaryDark, fontFamily: FONTS.body }}
              >
                {post.area}
              </span>
            )}
            {post.caption && (
              <p className="text-sm italic mb-3" style={{ color: COLORS.darkGray, fontFamily: FONTS.body }}>
                {post.caption}
              </p>
            )}
            {post.photo && (
              <img src={post.photo} alt="Post" className="w-full rounded-lg" />
            )}
          </div>
        ))}
        <h1
          className="text-2xl font-bold mb-2"
          style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}
        >
          Welcome back, {user?.name || 'User'}!
        </h1>
        <p className="text-sm mb-8" style={{ color: COLORS.darkGray, fontFamily: FONTS.body }}>
          Here's your sustainability dashboard overview.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { title: 'Carbon Footprint', value: '2.1 tons', change: '-12% this month', color: COLORS.primary },
            { title: 'Water Saved', value: '1,240 L', change: '+8% this month', color: COLORS.accent },
            { title: 'Energy Efficiency', value: '87%', change: 'On track', color: COLORS.mintDark },
          ].map((card, i) => (
            <div
              key={i}
              className="p-5"
              style={{
                backgroundColor: COLORS.white,
                borderRadius: RADIUS.lg,
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <p className="text-xs mb-1" style={{ color: COLORS.gray, fontFamily: FONTS.body }}>
                {card.title}
              </p>
              <p
                className="text-2xl font-bold"
                style={{ color: card.color, fontFamily: FONTS.heading }}
              >
                {card.value}
              </p>
              <p className="text-xs mt-1" style={{ color: COLORS.success }}>
                {card.change}
              </p>
            </div>
          ))}
        </div>

        <div
          className="p-6"
          style={{
            backgroundColor: COLORS.white,
            borderRadius: RADIUS.lg,
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          }}
        >
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: COLORS.black, fontFamily: FONTS.heading }}
          >
            Recent Activity
          </h3>
          <div className="space-y-3">
            {[
              { action: 'Logged a bike ride', detail: 'Saved 2.4 kg CO2', time: '2 hours ago' },
              { action: 'Completed recycling goal', detail: '10 items recycled', time: 'Yesterday' },
              { action: 'Joined community event', detail: 'Park clean-up crew', time: '3 days ago' },
            ].map((activity, i) => (
              <div
                key={i}
                className="flex justify-between items-center py-2 border-b"
                style={{ borderColor: COLORS.lightGray }}
              >
                <div>
                  <p className="text-sm font-medium" style={{ color: COLORS.black }}>
                    {activity.action}
                  </p>
                  <p className="text-xs" style={{ color: COLORS.gray }}>
                    {activity.detail}
                  </p>
                </div>
                <span className="text-xs" style={{ color: COLORS.gray }}>
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
