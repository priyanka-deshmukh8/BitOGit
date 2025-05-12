"use client"

import React from 'react';
import GitGame from '@/components/GitGame';

export default function GamePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 mb-8">
          Git Learning Game
        </h1>
        <GitGame />
      </div>
    </div>
  );
} 