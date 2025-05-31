"use client"

import React from 'react';
import GitGame from '@/components/GitGame';

export default function GamePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 mb-8">
          Git Learning Game
        </h1>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Learn Git through an interactive terminal experience. Complete levels by executing Git commands and watch your repository evolve in real-time.
          </p>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 shadow-xl">
        <GitGame />
          </div>
        </div>
      </div>
    </div>
  );
} 