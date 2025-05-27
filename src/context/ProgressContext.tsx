"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ProgressData {
  basics: number;
  intermediate: number;
  advanced: number;
  game: number;
}

interface ProgressContextType {
  progress: ProgressData;
  updateProgress: (section: keyof ProgressData, value: number) => void;
  resetProgress: () => void;
}

const defaultProgress: ProgressData = {
  basics: 0,
  intermediate: 0,
  advanced: 0,
  game: 0,
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<ProgressData>(() => {
    // Load progress from localStorage if available
    if (typeof window !== 'undefined') {
      const savedProgress = localStorage.getItem('git-learning-progress');
      return savedProgress ? JSON.parse(savedProgress) : defaultProgress;
    }
    return defaultProgress;
  });

  useEffect(() => {
    // Save progress to localStorage whenever it changes
    localStorage.setItem('git-learning-progress', JSON.stringify(progress));
  }, [progress]);

  const updateProgress = (section: keyof ProgressData, value: number) => {
    setProgress(prev => ({
      ...prev,
      [section]: Math.min(100, Math.max(0, value)), // Ensure value is between 0 and 100
    }));
  };

  const resetProgress = () => {
    setProgress(defaultProgress);
  };

  return (
    <ProgressContext.Provider value={{ progress, updateProgress, resetProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
} 