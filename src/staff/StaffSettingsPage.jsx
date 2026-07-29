import React, { useState } from 'react';
import { useAuth } from '../components/shared/AuthContext';
import { COLORS, FONTS, RADIUS } from '../components/shared/theme';

export default function StaffSettingsPage() {
  const { user } = useAuth();

  const [displayName, setDisplayName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [notifyEmail, setNotifyEmail] = useState(true);
  const [notifyPush, setNotifyPush] = useState(true);
  const [saved, setSaved] = useState(false);
  const [passwordSaved, setPasswordSaved] = useState(false);

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
          Manage your staff account preferences.
        </p>

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
              style={{ backgroundColor: COLORS.primaryDark, color: COLORS.white, fontFamily: FONTS.body }}
            >
              {saved ? 'Saved!' : 'Save Changes'}
            </button>
          </form>
        </div>

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
                style={{ accentColor: COLORS.primaryDark }}
              />
              <span className="text-sm" style={{ color: COLORS.black, fontFamily: FONTS.body }}>Email notifications for new reports</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={notifyPush}
                onChange={() => setNotifyPush(!notifyPush)}
                className="w-4 h-4 rounded"
                style={{ accentColor: COLORS.primaryDark }}
              />
              <span className="text-sm" style={{ color: COLORS.black, fontFamily: FONTS.body }}>Push notifications for urgent reports</span>
            </label>
          </div>
        </div>

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
                backgroundColor: newPassword && newPassword === confirmPassword ? COLORS.primaryDark : COLORS.lightGray,
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
