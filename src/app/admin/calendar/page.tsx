'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '../components/AdminLayout';
import { Calendar, Clock, MapPin, User, Phone, Plus, ChevronLeft, ChevronRight, Edit, Trash2 } from 'lucide-react';

interface Job {
  id: number;
  customer: string;
  service: string;
  date: string;
  time: string;
  duration: string;
  address: string;
  phone: string;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  notes: string;
}

export default function CalendarPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showAddJob, setShowAddJob] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token === 'authenticated') {
      setIsAuthenticated(true);
      loadMockJobs();
    } else {
      router.push('/admin');
    }
    setIsLoading(false);
  }, [router]);

  const loadMockJobs = () => {
    const mockData: Job[] = [
      {
        id: 1,
        customer: 'Sarah Johnson',
        service: 'Standard Cleaning',
        date: '2024-12-19',
        time: '9:00 AM',
        duration: '2 hours',
        address: '123 Main St, Riverside, Jacksonville, FL',
        phone: '(904) 555-0123',
        status: 'scheduled',
        notes: '3-bedroom home, weekly service'
      },
      {
        id: 2,
        customer: 'Mike Chen',
        service: 'Deep Cleaning',
        date: '2024-12-19',
        time: '1:00 PM',
        duration: '4 hours',
        address: '456 Oak Ave, San Marco, Jacksonville, FL',
        phone: '(904) 555-0456',
        status: 'scheduled',
        notes: 'Move-out cleaning, 2-bedroom apartment'
      },
      {
        id: 3,
        customer: 'Emily Davis',
        service: 'Move-in Cleaning',
        date: '2024-12-20',
        time: '10:00 AM',
        duration: '3 hours',
        address: '789 Pine Rd, Mandarin, Jacksonville, FL',
        phone: '(904) 555-0789',
        status: 'scheduled',
        notes: 'New home, 4-bedroom, 2-bath'
      },
      {
        id: 4,
        customer: 'Robert Wilson',
        service: 'Post-Construction',
        date: '2024-12-20',
        time: '2:00 PM',
        duration: '5 hours',
        address: '321 Elm St, Arlington, Jacksonville, FL',
        phone: '(904) 555-0321',
        status: 'scheduled',
        notes: 'Kitchen remodel cleanup'
      }
    ];
    setJobs(mockData);
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  const getJobsForDate = (date: Date) => {
    const dateString = date.toISOString().split('T')[0];
    return jobs.filter(job => job.date === dateString);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const previousMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const formatDay = (date: Date) => {
    return date.getDate();
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (date: Date) => {
    return selectedDate && date.toDateString() === selectedDate.toDateString();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-blue mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const days = getDaysInMonth(currentDate);

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage your cleaning schedule and appointments
            </p>
          </div>
          <button
            onClick={() => setShowAddJob(true)}
            className="bg-primary-blue text-white px-4 py-2 rounded-md hover:bg-primary-blue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue"
          >
            <Plus className="h-4 w-4 inline mr-2" />
            Add Job
          </button>
        </div>

        {/* Calendar navigation */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={previousMonth}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <h2 className="text-xl font-semibold text-gray-900">
              {formatDate(currentDate)}
            </h2>
            <button
              onClick={nextMonth}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-px bg-gray-200 rounded-lg overflow-hidden">
            {/* Day headers */}
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="bg-gray-50 p-3 text-center">
                <span className="text-sm font-medium text-gray-500">{day}</span>
              </div>
            ))}
            
            {/* Calendar days */}
            {days.map((day, index) => {
              if (!day) {
                return <div key={index} className="bg-white p-3 min-h-[120px]" />;
              }
              
              const dayJobs = getJobsForDate(day);
              const isCurrentDay = isToday(day);
              const isCurrentSelected = isSelected(day);
              
              return (
                <div
                  key={index}
                  className={`bg-white p-3 min-h-[120px] cursor-pointer hover:bg-gray-50 ${
                    isCurrentDay ? 'ring-2 ring-primary-blue' : ''
                  } ${isCurrentSelected ? 'bg-blue-50' : ''}`}
                  onClick={() => setSelectedDate(day)}
                >
                  <div className="text-right mb-2">
                    <span className={`text-sm font-medium ${
                      isCurrentDay ? 'text-primary-blue' : 'text-gray-900'
                    }`}>
                      {formatDay(day)}
                    </span>
                  </div>
                  
                  {/* Jobs for this day */}
                  <div className="space-y-1">
                    {dayJobs.slice(0, 2).map((job) => (
                      <div
                        key={job.id}
                        className="text-xs p-1 rounded bg-blue-100 text-blue-800 truncate"
                        title={`${job.customer} - ${job.service}`}
                      >
                        {job.customer} - {job.service}
                      </div>
                    ))}
                    {dayJobs.length > 2 && (
                      <div className="text-xs text-gray-500 text-center">
                        +{dayJobs.length - 2} more
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected date details */}
        {selectedDate && (
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Jobs for {selectedDate.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </h3>
            
            <div className="space-y-4">
              {getJobsForDate(selectedDate).map((job) => (
                <div key={job.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-lg font-medium text-gray-900">{job.customer}</h4>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(job.status)}`}>
                          {job.status}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{job.time} ({job.duration})</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{job.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{job.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{job.service}</span>
                        </div>
                      </div>
                      
                      {job.notes && (
                        <div className="mb-3">
                          <p className="text-sm text-gray-700">
                            <span className="font-medium">Notes:</span> {job.notes}
                          </p>
                        </div>
                      )}
                    </div>
                    
                    <div className="ml-4 flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-md">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              {getJobsForDate(selectedDate).length === 0 && (
                <div className="text-center py-8">
                  <Calendar className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No jobs scheduled</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    This day is free. Click "Add Job" to schedule a cleaning.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Quick stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Calendar className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Today's Jobs</dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {jobs.filter(job => job.date === new Date().toISOString().split('T')[0]).length}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Clock className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">This Week</dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {jobs.filter(job => {
                        const jobDate = new Date(job.date);
                        const now = new Date();
                        const weekStart = new Date(now.setDate(now.getDate() - now.getDay()));
                        const weekEnd = new Date(now.setDate(now.getDate() - now.getDay() + 6));
                        return jobDate >= weekStart && jobDate <= weekEnd;
                      }).length}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <User className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Scheduled</dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {jobs.filter(job => job.status === 'scheduled').length}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

