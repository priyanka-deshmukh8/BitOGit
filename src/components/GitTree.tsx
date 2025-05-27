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
    default: 'text-gray-400'
  };

  const getBranchColor = (branchName: string) => {
    const prefix = branchName.split('/')[0];
    return branchColors[prefix as keyof typeof branchColors] || branchColors.default;
  };

  const getBranchOffset = (branchName: string) => {
    const index = branches.findIndex(b => b.name === branchName);
    return index * 60; // Increased spacing between branches
  };

  return (
    <div className="git-tree-container p-6 bg-gray-900 rounded-lg h-full overflow-auto">
      <div className="relative min-h-[200px]">
        {/* Branch lines */}
        {branches.map((branch) => {
          const branchCommits = sortedCommits.filter(c => c.branch === branch.name);
          if (branchCommits.length === 0) return null;

          const offset = getBranchOffset(branch.name);
          const color = getBranchColor(branch.name);
          
          return (
            <div
              key={branch.name}
              className={`absolute top-0 bottom-0 w-0.5 ${color} opacity-50`}
              style={{
                left: `${offset + 30}px`,
              }}
            />
          );
        })}

        {/* Commits */}
        <div className="space-y-8">
          {sortedCommits.map((commit, index) => {
            const offset = getBranchOffset(commit.branch);
            const color = getBranchColor(commit.branch);
            const isCurrentBranch = commit.branch === currentBranch;
            const isMergeCommit = commit.parentIds.length > 1;
            
            return (
              <motion.div
                key={commit.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative"
                style={{ marginLeft: `${offset}px` }}
              >
                {/* Branch name */}
                <div className={`absolute -top-6 left-0 text-sm font-medium ${color}`}>
                  {commit.branch}
                </div>

                {/* Commit node and info */}
                <div className="flex items-start space-x-4">
                  {/* Commit node */}
                  <div className={`relative z-10 flex-shrink-0 ${isCurrentBranch ? 'scale-110' : ''}`}>
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        isMergeCommit 
                          ? 'bg-purple-500 hover:bg-purple-600' 
                          : 'bg-blue-500 hover:bg-blue-600'
                      }`}
                    >
                      {isMergeCommit ? (
                        <GitMerge className="w-4 h-4 text-white" />
                      ) : (
                        <GitCommit className="w-4 h-4 text-white" />
                      )}
                    </div>
                    {isCurrentBranch && (
                      <GitBranch 
                        className={`w-4 h-4 absolute -right-2 -top-2 ${color}`}
                        style={{ transform: 'rotate(45deg)' }}
                      />
                    )}
                  </div>

                  {/* Commit info */}
                  <div className="flex-grow bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-700 hover:border-gray-600 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-sm font-mono text-gray-400">{commit.id.slice(0, 7)}</div>
                      <div className="text-xs text-gray-500">
                        {new Date(commit.timestamp).toLocaleString()}
                      </div>
                    </div>
                    <div className="text-gray-300 break-words">{commit.message}</div>
                  </div>
                </div>

                {/* Connection lines */}
                {commit.parentIds.map((parentId, parentIndex) => {
                  const parentCommit = sortedCommits.find(c => c.id === parentId);
                  if (!parentCommit) return null;

                  const parentOffset = getBranchOffset(parentCommit.branch);
                  const isParentOnDifferentBranch = parentCommit.branch !== commit.branch;

                  return (
                    <div
                      key={parentId}
                      className={`absolute w-0.5 ${color} opacity-50`}
                      style={{
                        top: '50%',
                        left: `${parentOffset + 30}px`,
                        height: `${Math.abs(parentOffset - offset)}px`,
                        transform: `rotate(${isParentOnDifferentBranch ? '45deg' : '0deg'})`,
                        transformOrigin: 'top left'
                      }}
                    />
                  );
                })}
              </motion.div>
            );
          })}
        </div>

        {/* Empty state */}
        {sortedCommits.length === 0 && (
          <div className="flex flex-col items-center justify-center h-[200px] text-gray-500">
            <GitCommit className="w-8 h-8 mb-2" />
            <p>No commits yet. Start by initializing a repository.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GitTree; 