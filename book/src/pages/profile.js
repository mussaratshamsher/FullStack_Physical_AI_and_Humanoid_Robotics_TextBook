import React, { useState, useEffect } from 'react';
import { useHistory } from '@docusaurus/router';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

function Profile() {
  const [newPassword, setNewPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmittingProfile, setIsSubmittingProfile] = useState(false);
  const [isSubmittingPassword, setIsSubmittingPassword] = useState(false);

  // Try to get auth context, but provide fallback for SSG
  const { user, setUser, logout, updatePassword, updateProfile } = (typeof window !== 'undefined' && window.location)
    ? require('@site/src/auth/AuthContext').useAuth
      ? require('@site/src/auth/AuthContext').useAuth()
      : { user: null, setUser: null, logout: null, updatePassword: null, updateProfile: null }
    : { user: null, setUser: null, logout: null, updatePassword: null, updateProfile: null };

  const history = useHistory();

  useEffect(() => {
    if (!user && typeof window !== 'undefined' && history) {
      history.push('/login');
    } else if (user) {
      setDisplayName(user.displayName || '');
    }
  }, [user, history]);

  const handlePasswordUpdate = async (e) => {
    if (!updatePassword) {
      setError('Authentication service is not available');
      return;
    }

    e.preventDefault();
    setError('');
    setSuccess('');
    setIsSubmittingPassword(true);
    try {
      await updatePassword(newPassword);
      setSuccess('Password updated successfully!');
      setNewPassword('');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmittingPassword(false);
    }
  };

  const handleProfileUpdate = async (e) => {
    if (!updateProfile) {
      setError('Authentication service is not available');
      return;
    }

    e.preventDefault();
    setError('');
    setSuccess('');
    setIsSubmittingProfile(true);
    try {
      const updatedUser = await updateProfile({ displayName });
      setSuccess('Profile updated successfully!');
      // Update user in context
      // This is a bit of a hack, as we are not really updating the context,
      // but just the local user object. A better solution would be to
      // have a global state management solution like Redux or Zustand.
      // For now, this will work.
      if (setUser) {
        setUser(updatedUser);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmittingProfile(false);
    }
  };

  // Render nothing while redirecting or if auth service is not available
  if (!user) {
    if (typeof window !== 'undefined') {
      return null;
    } else {
      // For SSR, show a basic profile page placeholder
      return (
        <Layout title="Profile">
          <div className={styles.container}>
            <div className={styles.formContainer}>
              <h2>Profile</h2>
              <p>Authentication service not available during build</p>
            </div>
          </div>
        </Layout>
      );
    }
  }

  return (
    <Layout title="Profile">
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h2>Profile</h2>
          <div className={styles.profileHeader}>
            <img
              src={
                user.photoURL ||
                `https://api.dicebear.com/8.x/initials/svg?seed=${encodeURIComponent(
                  user.email
                )}`
              }
              alt="Profile"
              className={styles.profilePagePic}
            />
            <h3>{user.displayName || user.email}</h3>
          </div>
          <p>Email: {user.email}</p>

          <form onSubmit={handleProfileUpdate}>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Display Name"
            />
            <button type="submit" disabled={isSubmittingProfile}>
              {isSubmittingProfile ? 'Updating...' : 'Update Profile'}
            </button>
          </form>

          <hr className={styles.separator} />

          <form onSubmit={handlePasswordUpdate}>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New Password"
            />
            <button type="submit" disabled={isSubmittingPassword}>
              {isSubmittingPassword ? 'Updating...' : 'Update Password'}
            </button>
          </form>

          {error && <p className={styles.error}>{error}</p>}
          {success && <p className={styles.success}>{success}</p>}

          <hr className={styles.separator} />

          <button
            onClick={logout ? logout : undefined}
            className="button button--danger"
            disabled={!logout}
          >
            {logout ? 'Logout' : 'Logging service not available'}
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
