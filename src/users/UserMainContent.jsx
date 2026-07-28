import React, { useState, useRef } from 'react';
import { useAuth } from '../components/shared/AuthContext';
import { COLORS, FONTS, RADIUS } from '../components/shared/theme';
import userIcon from '../assets/user.png';
import PostCard from './PostCard';

export default function UserMainContent() {
  const { user } = useAuth();
  const displayName = user?.name || 'User';

  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState('');
  const [photoPreview, setPhotoPreview] = useState(null);
  const [selectedArea, setSelectedArea] = useState('');
  const [customArea, setCustomArea] = useState('');
  const [caption, setCaption] = useState('');
  const fileInputRef = useRef(null);

  const handlePost = () => {
    const text = modalText.trim();
    if (!text && !photoPreview) return;
    const area = selectedArea === 'Others' ? customArea.trim() : selectedArea;
    setPosts([{ id: Date.now(), text, photo: photoPreview, area, caption: caption.trim(), status: 'Pending', time: 'Just now' }, ...posts]);
    setModalText('');
    setPhotoPreview(null);
    setSelectedArea('');
    setCustomArea('');
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
              Create a post
            </div>
          </div>
        </div>

        {/* Create Post Modal */}
        {showModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                  onClick={() => { setShowModal(false); setPhotoPreview(null); setModalText(''); setSelectedArea(''); setCustomArea(''); setCaption(''); }}
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
            onClick={() => { setShowModal(false); setPhotoPreview(null); setModalText(''); setSelectedArea(''); setCustomArea(''); setCaption(''); }}
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
                  placeholder="Create a post"
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
                    <option value="RTL">RTL</option>
                    <option value="NGE">NGE</option>
                    <option value="SAL">SAL</option>
                    <option value="ALLIED">ALLIED</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                {/* Custom Area (shown when Others is selected) */}
                {selectedArea === 'Others' && (
                  <div className="mt-3">
                    <label className="text-xs font-semibold block mb-1" style={{ color: COLORS.darkGray, fontFamily: FONTS.body }}>
                      Specify Area
                    </label>
                    <input
                      type="text"
                      value={customArea}
                      onChange={(e) => setCustomArea(e.target.value)}
                      placeholder="Enter area..."
                      className="w-full border-none outline-none text-sm p-2 rounded-lg"
                      style={{
                        backgroundColor: COLORS.offWhite,
                        color: COLORS.black,
                        fontFamily: FONTS.body,
                      }}
                    />
                  </div>
                )}

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
        {/* Mock Posts */}
        <PostCard
          user="Maria Santos"
          text="There's a pile of uncollected garbage near the riverside walkway. It's been here for 3 days already and it's starting to smell."
          area="RTL"
          caption="Please send someone to clean this up ASAP"
          time="2 hours ago"
          status="Pending"
          initialLikes={12}
        />
        <PostCard
          user="Juan Dela Cruz"
          text="The dumpster behind NGE building is overflowing. Trash is scattered all over the parking area."
          area="NGE"
          caption="Overflowing waste bins need immediate attention"
          photo="https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=600"
          time="5 hours ago"
          status="Done"
          initialLikes={24}
        />
        <PostCard
          user="Ana Reyes"
          text="There are broken glass bottles and plastic waste scattered around the SAL courtyard. Could be a hazard for students."
          area="SAL"
          caption="Safety hazard — needs cleanup"
          time="1 day ago"
          status="Pending"
          initialLikes={8}
        />
        <PostCard
          user="Carlo Mendoza"
          text="The ALLIED hallway has spilled coffee and food waste on the floor near the vending machines."
          area="ALLIED"
          caption="Spilled food waste near vending area"
          time="2 days ago"
          status="Done"
          initialLikes={15}
        />
        <PostCard
          user="Elena Garcia"
          text="There's a large amount of construction debris left near the East Wing entrance. It's blocking the walkway."
          area="Others"
          caption="East Wing entrance — construction debris blocking path"
          time="3 days ago"
          status="Pending"
          initialLikes={6}
        />
      </div>
    </main>
  );
}
