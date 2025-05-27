"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, GitCommit, GitMerge } from 'lucide-react';

interface Commit {
  id: string;
  message: string;
  branch: string;
  parentIds: string[];
  timestamp: number;
}

interface Branch {
  name: string;
  head: string;
}

interface GitTreeProps {
  commits: Commit[];
  branches: Branch[];
  currentBranch: string;
}

const GitTree: React.FC<GitTreeProps> = ({ commits, branches, currentBranch }) => {
  const sortedCommits = [...commits].sort((a, b) => a.timestamp - b.timestamp);
  const branchColors = {
    main: 'text-blue-400',
    feature: 'text-green-400',
    bugfix: 'text-red-400',
    develop: 'text-purple-400',
  };

  const getBranchColor = (branchName: string) => {
    const prefix = branchName.split('-')[0];
    return branchColors[prefix as keyof typeof branchColors] || 'text-gray-400';
  };

  return (
    <div className="git-tree-container p-4 bg-gray-900 rounded-lg h-full overflow-auto">
      <div className="relative">
        {/* Branch lines */}
        {branches.map((branch) => {
          const branchCommits = sortedCommits.filter(c => c.branch === branch.name);
          return (
            <div
              key={branch.name}
              className={`absolute left-0 w-0.5 ${getBranchColor(branch.name)}`}
              style={{
                top: '0',
                bottom: '0',
                left: `${branches.indexOf(branch) * 40 + 20}px`,
              }}
            />
          );
        })}

        {/* Commits */}
        <div className="space-y-4">
          {sortedCommits.map((commit, index) => {
            const branchIndex = branches.findIndex(b => b.name === commit.branch);
            const isCurrentBranch = commit.branch === currentBranch;
            
            return (
              <motion.div
                key={commit.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative flex items-center"
                style={{ marginLeft: `${branchIndex * 40 + 20}px` }}
              >
                {/* Commit node */}
                <div className={`relative z-10 flex items-center ${isCurrentBranch ? 'scale-110' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    commit.parentIds.length > 1 ? 'bg-purple-500' : 'bg-blue-500'
                  }`}>
                    {commit.parentIds.length > 1 ? (
                      <GitMerge className="w-4 h-4 text-white" />
                    ) : (
                      <GitCommit className="w-4 h-4 text-white" />
                    )}
                  </div>
                  {isCurrentBranch && (
                    <GitBranch className={`w-4 h-4 ml-1 ${getBranchColor(commit.branch)}`} />
                  )}
                </div>

                {/* Commit info */}
                <div className="ml-4 bg-gray-800 p-2 rounded-lg shadow-lg">
                  <div className="text-sm font-mono text-gray-400">{commit.id.slice(0, 7)}</div>
                  <div className="text-gray-300">{commit.message}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {new Date(commit.timestamp).toLocaleString()}
                  </div>
                </div>

                {/* Branch name */}
                <div className={`absolute left-0 -top-6 text-sm ${getBranchColor(commit.branch)}`}>
                  {commit.branch}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GitTree; 