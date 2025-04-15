'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const ForgetPasswordCard = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleReset = (e) => {
    e.preventDefault();

    // Simple validation
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      setSuccess('');
      return;
    }

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters.");
      setSuccess('');
      return;
    }

    // Simulate API call to update password
    console.log("Updating password for:", email, newPassword);
    setError('');
    setSuccess("Password updated successfully!");
    router.push('/user-login');

    // Reset fields
    setEmail('');
    setNewPassword('');
    setConfirmPassword('');

    // Redirect to login after 2 seconds
    setTimeout(() => {
      router.push('/user-login');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md p-8 space-y-6 rounded-xl bg-gray-900 border border-purple-600 shadow-md">
        <h2 className="text-2xl font-bold text-white text-center">Reset Your Password</h2>
        <p className="text-gray-400 text-sm text-center">
          Enter your email and set a new password.
        </p>

        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-300">
              New Password
            </label>
            <input
              id="newPassword"
              type="password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="New password"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Confirm password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md transition"
          >
            Update Password
          </button>
        </form>

        {error && <p className="text-sm text-red-500 text-center">{error}</p>}
        {success && <p className="text-sm text-green-400 text-center">{success} Redirecting...</p>}

        <div className="text-center mt-4">
          <a href="/user-login" className="text-sm text-purple-400 hover:underline">
            Back to login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordCard;
