'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '../components/AdminLayout';
import { FileText, Search, Filter, Eye, Edit, Trash2, Calendar, Phone, Mail, MapPin } from 'lucide-react';

interface Submission {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  address: string;
  date: string;
  status: 'new' | 'contacted' | 'scheduled' | 'completed' | 'cancelled';
  source: string;
}

export default function SubmissionsPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token === 'authenticated') {
      setIsAuthenticated(true);
      // Load mock data for now
      loadMockSubmissions();
    } else {
      router.push('/admin');
    }
    setIsLoading(false);
  }, [router]);

  const loadMockSubmissions = () => {
    const mockData: Submission[] = [
      {
        id: 1,
        name: 'Sarah Johnson',
        email: 'sarah.j@email.com',
        phone: '(904) 555-0123',
        service: 'Standard Cleaning',
        message: 'Looking for weekly cleaning service for my 3-bedroom home in Riverside.',
        address: '123 Main St, Riverside, Jacksonville, FL',
        date: '2024-12-19',
        status: 'new',
        source: 'Contact Form'
      },
      {
        id: 2,
        name: 'Mike Chen',
        email: 'mike.chen@email.com',
        phone: '(904) 555-0456',
        service: 'Deep Cleaning',
        message: 'Need deep cleaning before moving out of my apartment.',
        address: '456 Oak Ave, San Marco, Jacksonville, FL',
        date: '2024-12-19',
        status: 'contacted',
        source: 'Post-Construction Form'
      },
      {
        id: 3,
        name: 'Emily Davis',
        email: 'emily.davis@email.com',
        phone: '(904) 555-0789',
        service: 'Move-in Cleaning',
        message: 'Just bought a house and need it cleaned before moving in.',
        address: '789 Pine Rd, Mandarin, Jacksonville, FL',
        date: '2024-12-18',
        status: 'scheduled',
        source: 'Contact Form'
      },
      {
        id: 4,
        name: 'Robert Wilson',
        email: 'robert.w@email.com',
        phone: '(904) 555-0321',
        service: 'Post-Construction',
        message: 'Kitchen remodel completed, need post-construction cleanup.',
        address: '321 Elm St, Arlington, Jacksonville, FL',
        date: '2024-12-18',
        status: 'completed',
        source: 'Post-Construction Form'
      }
    ];
    setSubmissions(mockData);
  };

  const filteredSubmissions = submissions.filter(submission => {
    const matchesSearch = submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         submission.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         submission.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || submission.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-yellow-100 text-yellow-800';
      case 'scheduled': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const updateStatus = (id: number, newStatus: Submission['status']) => {
    setSubmissions(prev => prev.map(sub => 
      sub.id === id ? { ...sub, status: newStatus } : sub
    ));
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

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Form Submissions</h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage and track all form submissions from your website
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-500">
              Total: {filteredSubmissions.length}
            </span>
          </div>
        </div>

        {/* Filters and search */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Search
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  id="search"
                  placeholder="Search by name, email, or service..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-blue focus:border-primary-blue sm:text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                id="status"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-primary-blue focus:border-primary-blue sm:text-sm"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="scheduled">Scheduled</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-primary-blue text-white px-4 py-2 rounded-md hover:bg-primary-blue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue">
                <Filter className="h-4 w-4 inline mr-2" />
                Apply Filters
              </button>
            </div>
          </div>
        </div>

        {/* Submissions list */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="space-y-4">
              {filteredSubmissions.map((submission) => (
                <div key={submission.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="text-lg font-medium text-gray-900">{submission.name}</h3>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(submission.status)}`}>
                          {submission.status}
                        </span>
                        <span className="text-sm text-gray-500">{submission.source}</span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{submission.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{submission.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FileText className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{submission.service}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{submission.date}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <MapPin className="h-4 w-4 text-gray-400" />
                          <span className="text-sm font-medium text-gray-700">Address:</span>
                        </div>
                        <p className="text-sm text-gray-600 ml-6">{submission.address}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-700">{submission.message}</p>
                      </div>
                    </div>
                    
                    <div className="ml-6 flex flex-col space-y-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-md">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Status update buttons */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm font-medium text-gray-700">Update Status:</span>
                      {['new', 'contacted', 'scheduled', 'completed', 'cancelled'].map((status) => (
                        <button
                          key={status}
                          onClick={() => updateStatus(submission.id, status as Submission['status'])}
                          className={`px-3 py-1 text-xs font-medium rounded-full ${
                            submission.status === status
                              ? 'bg-primary-blue text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {status}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredSubmissions.length === 0 && (
              <div className="text-center py-12">
                <FileText className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No submissions found</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}





