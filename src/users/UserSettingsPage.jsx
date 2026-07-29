import React, { useState } from 'react';
import { useAuth } from '../components/shared/AuthContext';
import { COLORS, FONTS, RADIUS } from '../components/shared/theme';

const initialAreas = ['RTL', 'NGE', 'SAL', 'ALLIED'];

export default function UserSettingsPage() {
  const { user } = useAuth();

  const [displayName, setDisplayName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedAreas, setSelectedAreas] = useState(initialAreas);
  const [notifyEmail, setNotifyEmail] = useState(true);
  const [notifyPush, setNotifyPush] = useState(true);
  const [notifyStatus, setNotifyStatus] = useState(true);
  const [showName, setShowName] = useState(true);
  const [saved, setSaved] = useState(false);
  const [passwordSaved, setPasswordSaved] = useState(false);

  const toggleArea = (area) => {
    setSelectedAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (!newPassword || newPassword !== confirmPassword) return;
    setPasswordSaved(true);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setTimeout(() => setPasswordSaved(false), 2000);
  };

  return (
    <main className="flex-1 p-6 overflow-y-auto" style={{ backgroundColor: COLORS.offWhite }}>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-1" style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}>
          Settings
        </h1>
        <p className="text-sm mb-6" style={{ color: COLORS.gray, fontFamily: FONTS.body }}>
          Manage your account preferences and configure the app to your liking.
        </p>

        {/* Profile */}
        <div className="p-6 mb-4" style={{ backgroundColor: COLORS.white, borderRadius: RADIUS.lg, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
          <h2 className="text-base font-bold mb-4" style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}>
            Profile Information
          </h2>
          <form onSubmit={handleSaveProfile}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs font-semibold block mb-1" style={{ color: COLORS.darkGray, fontFamily: FONTS.body }}>
                  Display Name
                </label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="w-full px-3 py-2 text-sm outline-none rounded-lg"
                  style={{ backgroundColor: COLORS.offWhite, color: COLORS.black, fontFamily: FONTS.body, border: `1px solid ${COLORS.lightGray}` }}
                />
              </div>
              <div>
                <label className="text-xs font-semibold block mb-1" style={{ color: COLORS.darkGray, fontFamily: FONTS.body }}>
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-sm outline-none rounded-lg"
                  style={{ backgroundColor: COLORS.offWhite, color: COLORS.black, fontFamily: FONTS.body, border: `1px solid ${COLORS.lightGray}` }}
                />
              </div>
            </div>
            <button
              type="submit"
              className="px-5 py-2 text-sm font-semibold border-none rounded-lg cursor-pointer transition-all hover:opacity-90"
              style={{ backgroundColor: COLORS.primary, color: COLORS.white, fontFamily: FONTS.body }}
            >
              {saved ? 'Saved!' : 'Save Changes'}
            </button>
          </form>
        </div>

        {/* Area Preferences */}
        <div className="p-6 mb-4" style={{ backgroundColor: COLORS.white, borderRadius: RADIUS.lg, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
          <h2 className="text-base font-bold mb-1" style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}>
            Area Preferences
          </h2>
          <p className="text-xs mb-4" style={{ color: COLORS.gray, fontFamily: FONTS.body }}>
            Select the campus areas you want to monitor and report on.
          </p>
          <div className="flex flex-wrap gap-2">
            {initialAreas.map((area) => (
              <button
                key={area}
                onClick={() => toggleArea(area)}
                className="px-4 py-2 text-sm font-semibold border-none rounded-lg cursor-pointer transition-all"
                style={{
                  backgroundColor: selectedAreas.includes(area) ? COLORS.primary : COLORS.offWhite,
                  color: selectedAreas.includes(area) ? COLORS.white : COLORS.darkGray,
                  fontFamily: FONTS.body,
                }}
              >
                {area}
              </button>
            ))}
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="p-6 mb-4" style={{ backgroundColor: COLORS.white, borderRadius: RADIUS.lg, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
          <h2 className="text-base font-bold mb-4" style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}>
            Notification Preferences
          </h2>
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={notifyEmail}
                onChange={() => setNotifyEmail(!notifyEmail)}
                className="w-4 h-4 rounded"
                style={{ accentColor: COLORS.primary }}
              />
              <span className="text-sm" style={{ color: COLORS.black, fontFamily: FONTS.body }}>Email notifications</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={notifyPush}
                onChange={() => setNotifyPush(!notifyPush)}
                className="w-4 h-4 rounded"
                style={{ accentColor: COLORS.primary }}
              />
              <span className="text-sm" style={{ color: COLORS.black, fontFamily: FONTS.body }}>Push notifications</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={notifyStatus}
                onChange={() => setNotifyStatus(!notifyStatus)}
                className="w-4 h-4 rounded"
                style={{ accentColor: COLORS.primary }}
              />
              <span className="text-sm" style={{ color: COLORS.black, fontFamily: FONTS.body }}>Report status updates</span>
            </label>
          </div>
        </div>

        {/* Privacy */}
        <div className="p-6 mb-4" style={{ backgroundColor: COLORS.white, borderRadius: RADIUS.lg, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
          <h2 className="text-base font-bold mb-4" style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}>
            Privacy
          </h2>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={showName}
              onChange={() => setShowName(!showName)}
              className="w-4 h-4 rounded"
              style={{ accentColor: COLORS.primary }}
            />
            <span className="text-sm" style={{ color: COLORS.black, fontFamily: FONTS.body }}>Show my name on posts</span>
          </label>
        </div>

        {/* Change Password */}
        <div className="p-6 mb-4" style={{ backgroundColor: COLORS.white, borderRadius: RADIUS.lg, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
          <h2 className="text-base font-bold mb-4" style={{ color: COLORS.primaryDark, fontFamily: FONTS.heading }}>
            Change Password
          </h2>
          <form onSubmit={handleChangePassword}>
            <div className="flex flex-col gap-3 mb-4">
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Current password"
                className="w-full px-3 py-2 text-sm outline-none rounded-lg"
                style={{ backgroundColor: COLORS.offWhite, color: COLORS.black, fontFamily: FONTS.body, border: `1px solid ${COLORS.lightGray}` }}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="New password"
                  className="w-full px-3 py-2 text-sm outline-none rounded-lg"
                  style={{ backgroundColor: COLORS.offWhite, color: COLORS.black, fontFamily: FONTS.body, border: `1px solid ${COLORS.lightGray}` }}
                />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  className="w-full px-3 py-2 text-sm outline-none rounded-lg"
                  style={{ backgroundColor: COLORS.offWhite, color: COLORS.black, fontFamily: FONTS.body, border: `1px solid ${COLORS.lightGray}` }}
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={!newPassword || newPassword !== confirmPassword}
              className="px-5 py-2 text-sm font-semibold border-none rounded-lg cursor-pointer transition-all hover:opacity-90"
              style={{
                backgroundColor: newPassword && newPassword === confirmPassword ? COLORS.primary : COLORS.lightGray,
                color: newPassword && newPassword === confirmPassword ? COLORS.white : COLORS.gray,
                fontFamily: FONTS.body,
              }}
            >
              {passwordSaved ? 'Password Updated!' : 'Update Password'}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
