"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Eye, Users, MessageSquare, TrendingUp } from 'lucide-react';

const visitData = [
  { name: 'Jan', visits: 120 },
  { name: 'Feb', visits: 190 },
  { name: 'Mar', visits: 300 },
  { name: 'Apr', visits: 280 },
  { name: 'May', visits: 400 },
  { name: 'Jun', visits: 350 }
];

const projectViews = [
  { name: 'E-Commerce Platform', views: 145 },
  { name: 'Task Management App', views: 98 },
  { name: 'Weather Dashboard', views: 87 }
];

export default function AnalyticsPage() {
  const [stats, setStats] = useState({
    totalVisits: 1847,
    mostViewedProject: 'E-Commerce Platform',
    contactSubmissions: 23,
    avgTimeOnSite: '2m 34s'
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Portfolio Analytics</h1>
          <p className="text-muted-foreground">
            Track visitor engagement and performance metrics
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Eye, label: 'Total Visits', value: stats.totalVisits, color: 'text-blue-600' },
            { icon: Users, label: 'Avg. Time on Site', value: stats.avgTimeOnSite, color: 'text-green-600' },
            { icon: MessageSquare, label: 'Contact Submissions', value: stats.contactSubmissions, color: 'text-purple-600' },
            { icon: TrendingUp, label: 'Most Viewed Project', value: stats.mostViewedProject, color: 'text-orange-600' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
            >
              <div className="flex items-center justify-between mb-2">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <p className="text-2xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Visits Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">Monthly Visits</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={visitData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="visits" stroke="#3b82f6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Project Views Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">Project Views</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={projectViews}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="views" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md mt-8"
        >
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: 'New visitor from Chennai', time: '2 minutes ago', type: 'visit' },
              { action: 'Contact form submitted', time: '1 hour ago', type: 'contact' },
              { action: 'Project viewed: E-Commerce Platform', time: '3 hours ago', type: 'project' },
              { action: 'Resume downloaded', time: '5 hours ago', type: 'download' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                <span className="text-sm">{activity.action}</span>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}