"use client"

import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Trophy, AlertCircle, CheckCircle2 } from 'lucide-react';
import GitTerminal from './GitTerminal';
import GitTree from './GitTree';

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

interface RepositoryState {
  commits: Commit[];
  branches: Branch[];
  currentBranch: string;
  stagedFiles: string[];
  workingDirectory: string[];
}

const initialRepositoryState: RepositoryState = {
  commits: [],
  branches: [
    { name: 'main', head: '' }
  ],
  currentBranch: 'main',
  stagedFiles: [],
  workingDirectory: []
};

const levels = [
  {
    id: 1,
    title: "Introduction to Git",
    description: "Learn the basics of Git by initializing a repository and making your first commit.",
    goal: "Initialize a Git repository and commit a file.",
    commands: ["git init", "git add .", "git commit -m 'Initial commit'"],
    validateState: (state: RepositoryState) => state.commits.length > 0,
  },
  {
    id: 2,
    title: "Branching Basics",
    description: "Explore branching by creating and switching branches.",
    goal: "Create a new branch and switch to it.",
    commands: ["git branch feature/new-feature", "git checkout feature/new-feature"],
    validateState: (state: RepositoryState) => 
      state.branches.some(b => b.name === 'feature/new-feature') && 
      state.currentBranch === 'feature/new-feature',
  },
  {
    id: 3,
    title: "Making Changes",
    description: "Learn how to stage and commit changes in your repository.",
    goal: "Create a file, stage it, and commit it to your feature branch.",
    commands: [
      "echo 'Hello, Git!' > hello.txt",
      "git add hello.txt",
      "git commit -m 'Add hello.txt'"
    ],
    validateState: (state: RepositoryState) => 
      state.commits.some(c => c.message === 'Add hello.txt'),
  },
  {
    id: 4,
    title: "Merging Changes",
    description: "Learn how to merge branches and resolve conflicts.",
    goal: "Merge your feature branch back into main.",
    commands: [
      "git checkout main",
      "git merge feature/new-feature"
    ],
    validateState: (state: RepositoryState) => 
      state.currentBranch === 'main' && 
      state.commits.some(c => c.parentIds.length > 1),
  },
];

const GitGame = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [repositoryState, setRepositoryState] = useState<RepositoryState>(initialRepositoryState);
  const [isCommandValid, setIsCommandValid] = useState(true);
  const [commandOutput, setCommandOutput] = useState<string[]>([]);

  const validateCommand = useCallback((command: string) => {
    const validCommands = [
      'git init',
      'git add',
      'git commit',
      'git branch',
      'git checkout',
      'git merge',
      'git status',
      'git log',
      'git help',
      'echo',
      'ls',
      'clear',
    ];

    const [cmd] = command.split(' ');
    return validCommands.includes(cmd);
  }, []);

  const handleCommandExecute = useCallback((command: string) => {
    setIsCommandValid(validateCommand(command));
    
    if (!validateCommand(command)) {
      setCommandOutput(['error: Invalid command. Type "git help" for available commands.']);
      return;
    }

    // Simulate Git command execution
    const [cmd, ...args] = command.split(' ');
    let newState = { ...repositoryState };
    let output: string[] = [];

    switch (cmd) {
      case 'git':
        switch (args[0]) {
          case 'init':
            if (repositoryState.commits.length === 0) {
              output = ['Initialized empty Git repository'];
            } else {
              output = ['Reinitialized existing Git repository'];
            }
            break;
          case 'add':
            if (args[1] === '.') {
              newState.stagedFiles = [...newState.workingDirectory];
              output = ['Added all files to staging area'];
            } else {
              newState.stagedFiles.push(args[1]);
              output = [`Added '${args[1]}' to staging area`];
            }
            break;
          case 'commit':
            if (newState.stagedFiles.length === 0) {
              output = ['error: nothing to commit'];
            } else {
              const commit: Commit = {
                id: Math.random().toString(36).substring(2, 9),
                message: args.slice(2).join(' ').replace(/['"]/g, ''),
                branch: newState.currentBranch,
                parentIds: [newState.branches.find(b => b.name === newState.currentBranch)?.head || ''],
                timestamp: Date.now(),
              };
              newState.commits.push(commit);
              newState.branches = newState.branches.map(b => 
                b.name === newState.currentBranch ? { ...b, head: commit.id } : b
              );
              newState.stagedFiles = [];
              output = [`[${newState.currentBranch} ${commit.id.slice(0, 7)}] ${commit.message}`];
            }
            break;
          case 'branch':
            if (args[1]) {
              newState.branches.push({ name: args[1], head: '' });
              output = [`Created branch '${args[1]}'`];
            }
            break;
          case 'checkout':
            if (args[1]) {
              const branch = newState.branches.find(b => b.name === args[1]);
              if (branch) {
                newState.currentBranch = branch.name;
                output = [`Switched to branch '${branch.name}'`];
              } else {
                output = [`error: branch '${args[1]}' not found`];
              }
            }
            break;
          case 'merge':
            if (args[1]) {
              const branch = newState.branches.find(b => b.name === args[1]);
              if (branch) {
                const mergeCommit: Commit = {
                  id: Math.random().toString(36).substring(2, 9),
                  message: 'Merge branch ' + args[1],
                  branch: newState.currentBranch,
                  parentIds: [
                    newState.branches.find(b => b.name === newState.currentBranch)?.head || '',
                    branch.head
                  ],
                  timestamp: Date.now(),
                };
                newState.commits.push(mergeCommit);
                newState.branches = newState.branches.map(b => 
                  b.name === newState.currentBranch ? { ...b, head: mergeCommit.id } : b
                );
                output = [`Merged branch '${args[1]}' into '${newState.currentBranch}'`];
              } else {
                output = [`error: branch '${args[1]}' not found`];
              }
            }
            break;
          case 'status':
            output = [
              `On branch ${newState.currentBranch}`,
              newState.stagedFiles.length > 0 
                ? 'Changes to be committed:' 
                : 'No changes staged for commit',
              ...newState.stagedFiles.map(f => `  new file: ${f}`),
              newState.workingDirectory.length > newState.stagedFiles.length
                ? 'Untracked files:' 
                : 'No untracked files',
              ...newState.workingDirectory
                .filter(f => !newState.stagedFiles.includes(f))
                .map(f => `  ${f}`),
            ];
            break;
          case 'log':
            output = newState.commits
              .filter(c => c.branch === newState.currentBranch)
              .map(c => `commit ${c.id}\nAuthor: User <user@example.com>\nDate: ${new Date(c.timestamp).toLocaleString()}\n\n    ${c.message}`);
            break;
          case 'help':
            output = [
              'Available commands:',
              '  git init              Initialize a new repository',
              '  git add <file>        Stage changes',
              '  git commit -m <msg>   Commit staged changes',
              '  git branch <name>     Create a new branch',
              '  git checkout <name>   Switch to a branch',
              '  git merge <name>      Merge a branch',
              '  git status           Show repository status',
              '  git log              Show commit history',
              '  git help             Show this help message',
            ];
            break;
        }
        break;
      case 'echo':
        const content = args.slice(1).join(' ').replace(/['"]/g, '');
        const filename = args[0].replace('>', '').trim();
        newState.workingDirectory.push(filename);
        output = [`Created file '${filename}'`];
        break;
      case 'ls':
        output = newState.workingDirectory;
        break;
      case 'clear':
        setCommandOutput([]);
        return;
    }

    setRepositoryState(newState);
    setCommandOutput(output);

    // Check if level is complete
    const currentLevelData = levels[currentLevel];
    if (currentLevelData.validateState(newState)) {
      setCommandOutput(prev => [...prev, '🎉 Level completed! Type "next" to continue.']);
    }
  }, [repositoryState, currentLevel, validateCommand]);

  const nextLevel = () => {
    if (currentLevel < levels.length - 1) {
      setCurrentLevel(currentLevel + 1);
      setCommandOutput([]);
    } else {
      setCommandOutput(['🎉 Congratulations! You have completed all levels!']);
    }
  };

  const handleCommand = (command: string) => {
    if (command === 'next' && levels[currentLevel].validateState(repositoryState)) {
      nextLevel();
    } else {
      handleCommandExecute(command);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
      {/* Left Panel: Terminal and Instructions */}
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 rounded-lg p-6 shadow-lg"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <h2 className="text-xl font-bold text-gray-100">Level {currentLevel + 1}: {levels[currentLevel].title}</h2>
          </div>
          <p className="text-gray-300 mb-2">{levels[currentLevel].description}</p>
          <div className="flex items-center space-x-2 text-gray-400">
            <GitBranch className="w-4 h-4" />
            <span>Goal: {levels[currentLevel].goal}</span>
          </div>
        </motion.div>

        <GitTerminal
          onCommandExecute={handleCommand}
          currentBranch={repositoryState.currentBranch}
          isCommandValid={isCommandValid}
          commandOutput={commandOutput}
        />

        {levels[currentLevel].validateState(repositoryState) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 flex items-center space-x-2"
          >
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <span className="text-green-400">Level completed! Type "next" to continue.</span>
          </motion.div>
        )}
      </div>

      {/* Right Panel: Git Tree Visualization */}
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-gray-100">Git Tree Visualization</h3>
        </div>
        <div className="h-[calc(100vh-12rem)]">
          <GitTree
            commits={repositoryState.commits}
            branches={repositoryState.branches}
            currentBranch={repositoryState.currentBranch}
          />
        </div>
      </div>
    </div>
  );
};

export default GitGame; 