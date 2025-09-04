'use client';

import React from 'react';
import { 
  Calendar, 
  FileText, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export default function DashboardOverview() {
  // Mock data - in production this would come from your backend
  const stats = [
    { name: 'Total Submissions', value: '24', change: '+12%', changeType: 'positive', icon: FileText },
    { name: 'Active Customers', value: '156', change: '+8%', changeType: 'positive', icon: Users },
    { name: 'Scheduled Jobs', value: '18', change: '+5%', changeType: 'positive', icon: Calendar },
    { name: 'Monthly Revenue', value: '$12,450', change: '+23%', changeType: 'positive', icon: DollarSign },
  ];

  const recentSubmissions = [
    { id: 1, name: 'Sarah Johnson', service: 'Standard Cleaning', date: '2024-12-19', status: 'pending' },
    { id: 2, name: 'Mike Chen', service: 'Deep Cleaning', date: '2024-12-19', status: 'confirmed' },
    { id: 3, name: 'Emily Davis', service: 'Move-in Cleaning', date: '2024-12-18', status: 'completed' },
    { id: 4, name: 'Robert Wilson', service: 'Post-Construction', date: '2024-12-18', status: 'scheduled' },
  ];

  const upcomingJobs = [
    { id: 1, customer: 'Sarah Johnson', service: 'Standard Cleaning', time: '9:00 AM', address: '123 Main St' },
    { id: 2, customer: 'Mike Chen', service: 'Deep Cleaning', time: '1:00 PM', address: '456 Oak Ave' },
    { id: 3, customer: 'Emily Davis', service: 'Move-in Cleaning', time: '3:00 PM', address: '789 Pine Rd' },
  ];

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="mt-1 text-sm text-gray-500">
          Welcome back! Here's what's happening with your cleaning service today.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <stat.icon className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                    <dd className="text-lg font-medium text-gray-900">{stat.value}</dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <div className="text-sm">
                <span className={`font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
                <span className="text-gray-500"> from last month</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Submissions */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
              Recent Submissions
            </h3>
            <div className="space-y-4">
              {recentSubmissions.map((submission) => (
                <div key={submission.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      {submission.status === 'completed' ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : submission.status === 'confirmed' ? (
                        <Clock className="h-5 w-5 text-blue-500" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-yellow-500" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{submission.name}</p>
                      <p className="text-sm text-gray-500">{submission.service}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-900">{submission.date}</p>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      submission.status === 'completed' ? 'bg-green-100 text-green-800' :
                      submission.status === 'confirmed' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {submission.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Jobs */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
              Today's Schedule
            </h3>
            <div className="space-y-4">
              {upcomingJobs.map((job) => (
                <div key={job.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Calendar className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{job.customer}</p>
                      <p className="text-sm text-gray-500">{job.service}</p>
                      <p className="text-xs text-gray-400">{job.address}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{job.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <button className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-blue hover:bg-primary-blue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Job
            </button>
            <button className="flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue">
              <FileText className="h-4 w-4 mr-2" />
              View Submissions
            </button>
            <button className="flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue">
              <Users className="h-4 w-4 mr-2" />
              Add Customer
            </button>
            <button className="flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue">
              <TrendingUp className="h-4 w-4 mr-2" />
              View Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}





