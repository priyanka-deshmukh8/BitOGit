"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { Trophy, BookOpen, GitBranch, GitPullRequest } from 'lucide-react';

interface ProgressData {
  basics: number;
  intermediate: number;
  advanced: number;
  game: number;
}

interface ProgressTrackerProps {
  progress: ProgressData;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ progress }) => {
  const totalProgress = Math.round(
    (progress.basics + progress.intermediate + progress.advanced + progress.game) / 4
  );

  const progressItems = [
    {
      title: "Git Basics",
      progress: progress.basics,
      icon: BookOpen,
      color: "text-blue-400",
    },
    {
      title: "Intermediate Git",
      progress: progress.intermediate,
      icon: GitBranch,
      color: "text-green-400",
    },
    {
      title: "Advanced Git",
      progress: progress.advanced,
      icon: GitPullRequest,
      color: "text-purple-400",
    },
    {
      title: "Git Game",
      progress: progress.game,
      icon: Trophy,
      color: "text-yellow-400",
    },
  ];

  return (
    <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-100">
          <Trophy className="h-5 w-5 text-yellow-400" />
          Learning Progress
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
              {totalProgress}%
            </div>
            <div className="text-sm text-gray-400">Overall Progress</div>
          </div>

          <div className="space-y-4">
            {progressItems.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <item.icon className={`h-4 w-4 ${item.color}`} />
                    <span className="text-sm text-gray-300">{item.title}</span>
                  </div>
                  <span className="text-sm text-gray-400">{item.progress}%</span>
                </div>
                <Progress value={item.progress} className="h-2" />
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressTracker; 