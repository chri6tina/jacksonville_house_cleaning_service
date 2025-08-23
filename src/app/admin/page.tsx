import React from 'react';
import { redirect } from 'next/navigation';
import AdminLogin from './components/AdminLogin';

export default function AdminPage() {
  // For now, we'll show the login form
  // Later we can add session checking logic
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Admin Dashboard
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sign in to manage your cleaning service
          </p>
        </div>
        <AdminLogin />
      </div>
    </div>
  );
}
