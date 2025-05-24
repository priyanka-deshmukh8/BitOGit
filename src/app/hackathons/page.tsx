"use client"

import React from 'react';
import HackathonsList from '@/components/HackathonsList';

export default function HackathonsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 mb-8">
          Upcoming Hackathons
        </h1>
        <HackathonsList />
      </div>
    </div>
  );
} 