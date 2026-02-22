import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [settings, setSettings] = useState({
    darkMode: false,
    language: 'english',
    notifications: true,
    emailUpdates: true
  });

  const [password, setPassword] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    console.log('Settings saved:', settings);
    console.log('Password change requested');
    alert('Settings saved successfully!');
  };

  const handleExportDiaries = () => {
    alert('Export functionality would be available with full backend integration');
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      alert('Account deletion request sent. This feature requires backend integration.');
    }
  };

  return (
    <div className="settings-page">
      {/* Main Content */}
      <main className="settings-main">
        <div className="container">
          {/* Page Header */}
          <header className="settings-header">
            <h1 className="settings-title">Settings</h1>
            <p className="settings-subtitle">Manage your account and preferences.</p>
          </header>

          {/* Settings Form */}
          <form className="settings-form" onSubmit={handleSaveChanges}>
            
            {/* Account Settings */}
            <section className="settings-section">
              <h2 className="section-title">Account Settings</h2>
              
              <div className="setting-item">
                <label className="setting-label">Email Address</label>
                <div className="readonly-field">
                  user@traveldiariesnepal.com
                  <span className="readonly-badge">Read-only</span>
                </div>
              </div>

              <div className="setting-item">
                <label className="setting-label">Change Password</label>
                <div className="password-fields">
                  <input
                    type="password"
                    name="current"
                    className="setting-input"
                    placeholder="Current password"
                    value={password.current}
                    onChange={handlePasswordChange}
                  />
                  <input
                    type="password"
                    name="new"
                    className="setting-input"
                    placeholder="New password"
                    value={password.new}
                    onChange={handlePasswordChange}
                  />
                  <input
                    type="password"
                    name="confirm"
                    className="setting-input"
                    placeholder="Confirm new password"
                    value={password.confirm}
                    onChange={handlePasswordChange}
                  />
                </div>
              </div>
            </section>

            {/* Appearance */}
            <section className="settings-section">
              <h2 className="section-title">Appearance</h2>
              
              <div className="setting-item">
                <label className="setting-label">Theme Preference</label>
                <div className="theme-toggle">
                  <button
                    type="button"
                    className={`theme-option ${!settings.darkMode ? 'active' : ''}`}
                    onClick={() => handleSettingChange('darkMode', false)}
                  >
                    Light Mode
                  </button>
                  <button
                    type="button"
                    className={`theme-option ${settings.darkMode ? 'active' : ''}`}
                    onClick={() => handleSettingChange('darkMode', true)}
                  >
                    Dark Mode
                  </button>
                </div>
              </div>
            </section>

            {/* Language */}
            <section className="settings-section">
              <h2 className="section-title">Language</h2>
              
              <div className="setting-item">
                <label className="setting-label">Preferred Language</label>
                <div className="language-selector">
                  <select
                    className="setting-select"
                    value={settings.language}
                    onChange={(e) => handleSettingChange('language', e.target.value)}
                  >
                    <option value="english">English</option>
                    <option value="nepali">नेपाली (Nepali)</option>
                  </select>
                  <div className="language-note">
                    Choose your preferred language for the application interface.
                  </div>
                </div>
              </div>
            </section>

            {/* Notifications */}
            <section className="settings-section">
              <h2 className="section-title">Notifications</h2>
              
              <div className="setting-item">
                <div className="toggle-container">
                  <label className="toggle-label">
                    <span>Enable notifications</span>
                    <div className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={settings.notifications}
                        onChange={(e) => handleSettingChange('notifications', e.target.checked)}
                        className="toggle-input"
                      />
                      <span className="toggle-slider"></span>
                    </div>
                  </label>
                  <p className="toggle-description">
                    Receive notifications for new comments and likes on your diaries
                  </p>
                </div>
              </div>

              <div className="setting-item">
                <div className="toggle-container">
                  <label className="toggle-label">
                    <span>Email updates</span>
                    <div className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={settings.emailUpdates}
                        onChange={(e) => handleSettingChange('emailUpdates', e.target.checked)}
                        className="toggle-input"
                      />
                      <span className="toggle-slider"></span>
                    </div>
                  </label>
                  <p className="toggle-description">
                    Receive weekly summaries and platform updates via email
                  </p>
                </div>
              </div>
            </section>

            {/* Data & Privacy */}
            <section className="settings-section">
              <h2 className="section-title">Data & Privacy</h2>
              
              <div className="setting-item">
                <label className="setting-label">Export Your Data</label>
                <p className="setting-description">
                  Download all your travel diaries and personal data in a portable format.
                </p>
                <button
                  type="button"
                  className="export-button"
                  onClick={handleExportDiaries}
                >
                  Export My Diaries
                </button>
              </div>

              <div className="setting-item">
                <label className="setting-label">Account Management</label>
                <p className="setting-description warning-text">
                  This action is permanent and cannot be undone. All your data will be deleted.
                </p>
                <button
                  type="button"
                  className="delete-button"
                  onClick={handleDeleteAccount}
                >
                  Delete Account
                </button>
              </div>
            </section>

            {/* Save Button */}
            <div className="save-section">
              <button type="submit" className="save-button">
                Save Changes
              </button>
              <p className="save-note">
                Your preferences will be applied immediately
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Settings;