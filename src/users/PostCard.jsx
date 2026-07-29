import React, { useState, useRef } from 'react';
import { COLORS, FONTS, RADIUS } from '../components/shared/theme';
import userIcon from '../assets/user.png';

export default function PostCard({ user, text, area, caption, photo, time, status: initialStatus, role, onStatusUpdate, initialLikes = 0, proofUrl: initialProofUrl, onLike }) {
  const [status, setStatus] = useState(initialStatus || 'Pending');
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);
  const [proofUrl, setProofUrl] = useState(initialProofUrl || '');
  const [showProofModal, setShowProofModal] = useState(false);
  const [showViewProof, setShowViewProof] = useState(false);
  const [proofInput, setProofInput] = useState('');
  const [proofPhotoPreview, setProofPhotoPreview] = useState(null);
  const proofFileInputRef = useRef(null);

  const handleMarkDone = () => {
    setProofInput('');
    setProofPhotoPreview(null);
    setShowProofModal(true);
  };

  const handleConfirmDone = () => {
    const url = proofInput.trim() || proofPhotoPreview || '';
    setProofUrl(url);
    setStatus('Done');
    setShowProofModal(false);
    if (onStatusUpdate) onStatusUpdate('Done', url);
  };

  const handleProofPhotoSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProofPhotoPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleRevertPending = () => {
    setStatus('Pending');
    setProofUrl('');
    if (onStatusUpdate) onStatusUpdate('Pending', '');
  };

  const isPending = status === 'Pending';

  const handleLike = () => {
    const willBeLiked = !liked;
    setLiked(willBeLiked);
    setLikes((prev) => (willBeLiked ? prev + 1 : prev - 1));
    if (onLike) onLike(willBeLiked ? 1 : -1);
  };

  return (
    <div
      className="p-4 mb-4"
      style={{
        backgroundColor: COLORS.white,
        borderRadius: RADIUS.lg,
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      }}
    >
      {/* User */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src={userIcon}
          alt={user}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold" style={{ color: COLORS.black, fontFamily: FONTS.heading }}>
            {user}
          </p>
          <p className="text-xs" style={{ color: COLORS.gray }}>{time}</p>
        </div>
      </div>

      {/* Post */}
      {text && (
        <p className="text-sm leading-relaxed mb-3" style={{ color: COLORS.black, fontFamily: FONTS.body }}>
          {text}
        </p>
      )}

      {/* Area */}
      {area && (
        <div className="mb-2">
          <span
            className="text-xs font-semibold"
            style={{ color: COLORS.darkGray, fontFamily: FONTS.body }}
          >
            Area:
          </span>{' '}
          <span
            className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ backgroundColor: COLORS.mintLight, color: COLORS.primaryDark, fontFamily: FONTS.body }}
          >
            {area}
          </span>
        </div>
      )}

      {/* Caption */}
      {caption && (
        <div className="mb-3">
          <span
            className="text-xs font-semibold"
            style={{ color: COLORS.darkGray, fontFamily: FONTS.body }}
          >
            Caption:
          </span>{' '}
          <span className="text-sm italic" style={{ color: COLORS.darkGray, fontFamily: FONTS.body }}>
            {caption}
          </span>
        </div>
      )}

      {/* Photo */}
      {photo && (
        <img src={photo} alt="Post" className="w-full rounded-lg mb-3" />
      )}

      {/* Proof */}
      {!isPending && proofUrl && (
        <div className="mb-3">
          <button
            onClick={() => setShowViewProof(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 border-none rounded-lg cursor-pointer text-xs font-semibold transition-all hover:opacity-80"
            style={{ backgroundColor: COLORS.mintLight, color: COLORS.primaryDark, fontFamily: FONTS.body }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            View Proof
          </button>
        </div>
      )}

      {/* Status + Like - Bottom */}
      <div
        className="flex items-center justify-between pt-3"
        style={{ borderTop: `1px solid ${COLORS.lightGray}` }}
      >
        <div className="flex items-center gap-3">
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{
              backgroundColor: isPending ? '#FFF3E0' : '#E8F5E9',
              color: isPending ? COLORS.warning : COLORS.success,
              fontFamily: FONTS.body,
            }}
          >
            {status}
          </span>

          {/* Like Button */}
          <button
            onClick={handleLike}
            className="flex items-center gap-1.5 px-3 py-1 border-none rounded-full text-xs font-semibold cursor-pointer transition-all"
            style={{
              backgroundColor: liked ? '#FFEBEE' : COLORS.offWhite,
              color: liked ? COLORS.error : COLORS.gray,
              fontFamily: FONTS.body,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
            {likes}
          </button>
        </div>

        {role === 'staff' && isPending && (
          <button
            onClick={handleMarkDone}
            className="px-3 py-1 border-none rounded-full text-xs font-semibold cursor-pointer transition-all"
            style={{
              backgroundColor: COLORS.success,
              color: COLORS.white,
              fontFamily: FONTS.body,
            }}
          >
            Mark as Done
          </button>
        )}

        {role === 'staff' && !isPending && (
          <button
            onClick={handleRevertPending}
            className="px-3 py-1 border-none rounded-full text-xs font-semibold cursor-pointer transition-all"
            style={{
              backgroundColor: COLORS.warning,
              color: COLORS.white,
              fontFamily: FONTS.body,
            }}
          >
            Revert to Pending
          </button>
        )}
      </div>

      {/* Proof Modal */}
      {showProofModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={() => setShowProofModal(false)}
        >
          <div
            className="w-full max-w-md mx-4"
            style={{
              backgroundColor: COLORS.white,
              borderRadius: RADIUS.lg,
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="flex items-center justify-between p-4"
              style={{ borderBottom: `1px solid ${COLORS.lightGray}` }}
            >
              <h3 className="text-base font-bold" style={{ color: COLORS.black, fontFamily: FONTS.heading }}>
                Add Proof
              </h3>
              <button
                onClick={() => setShowProofModal(false)}
                className="w-8 h-8 flex items-center justify-center border-none rounded-full cursor-pointer text-lg"
                style={{ backgroundColor: COLORS.offWhite, color: COLORS.gray }}
              >
                ✕
              </button>
            </div>

            <div className="p-4">
              <p className="text-sm mb-4" style={{ color: COLORS.darkGray, fontFamily: FONTS.body }}>
                Upload or paste an image URL as proof that the cleanup is complete.
              </p>

              {proofPhotoPreview && (
                <div className="relative mb-4">
                  <img
                    src={proofPhotoPreview}
                    alt="Proof preview"
                    className="w-full max-h-48 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => { setProofPhotoPreview(null); setProofInput(''); }}
                    className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center border-none rounded-full cursor-pointer text-xs"
                    style={{ backgroundColor: COLORS.white, color: COLORS.gray, boxShadow: '0 1px 4px rgba(0,0,0,0.2)' }}
                  >
                    ✕
                  </button>
                </div>
              )}

              <input
                type="text"
                value={proofInput}
                onChange={(e) => setProofInput(e.target.value)}
                placeholder="Paste image URL..."
                className="w-full px-4 py-2.5 text-sm border outline-none rounded-lg mb-3"
                style={{
                  borderColor: COLORS.mint,
                  borderRadius: RADIUS.md,
                  fontFamily: FONTS.body,
                  backgroundColor: COLORS.white,
                  color: COLORS.black,
                }}
                onFocus={(e) => (e.target.style.borderColor = COLORS.primary)}
                onBlur={(e) => (e.target.style.borderColor = COLORS.mint)}
              />

              <input
                type="file"
                accept="image/*"
                ref={proofFileInputRef}
                onChange={handleProofPhotoSelect}
                className="hidden"
              />
              <button
                onClick={() => proofFileInputRef.current?.click()}
                className="w-full py-2.5 mb-3 text-sm font-semibold border-2 border-dashed rounded-lg cursor-pointer transition-all"
                style={{
                  borderColor: COLORS.mint,
                  color: COLORS.primary,
                  fontFamily: FONTS.body,
                  backgroundColor: COLORS.offWhite,
                }}
              >
                Upload Photo
              </button>

              <button
                onClick={handleConfirmDone}
                disabled={!proofInput.trim() && !proofPhotoPreview}
                className="w-full py-2.5 text-sm font-semibold border-none rounded-lg cursor-pointer transition-all"
                style={{
                  backgroundColor: (proofInput.trim() || proofPhotoPreview) ? COLORS.primary : COLORS.lightGray,
                  color: (proofInput.trim() || proofPhotoPreview) ? COLORS.white : COLORS.gray,
                  fontFamily: FONTS.body,
                }}
              >
                Confirm Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Proof Modal */}
      {showViewProof && proofUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={() => setShowViewProof(false)}
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
                onClick={() => setShowViewProof(false)}
                className="w-8 h-8 flex items-center justify-center border-none rounded-full cursor-pointer text-lg"
                style={{ backgroundColor: COLORS.offWhite, color: COLORS.gray }}
              >
                ✕
              </button>
            </div>
            <img
              src={proofUrl}
              alt="Cleanup proof"
              className="w-full max-h-96 object-contain p-4"
            />
          </div>
        </div>
      )}
    </div>
  );
}
