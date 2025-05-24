import React, { useState } from 'react';
import GitTerminal from './GitTerminal';
import GitVisualizer from '../components/GitVisualizer';
import GoalVisualizer from './GitVisualizer';

const levels = [
  {
    id: 1,
    title: "Introduction to Git",
    description: "Learn the basics of Git by initializing a repository and making your first commit.",
    goal: "Initialize a Git repository and commit a file.",
    commands: ["git init", "git add .", "git commit -m 'Initial commit'"],
  },
  {
    id: 2,
    title: "Branching Basics",
    description: "Explore branching by creating and switching branches.",
    goal: "Create a new branch and switch to it.",
    commands: ["git branch new-branch", "git checkout new-branch"],
  },
  // Add more levels as needed
];

const GitGame = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [isLevelComplete, setIsLevelComplete] = useState(false);
  const [repositoryState, setRepositoryState] = useState({}); // Define the structure of your repository state

  const handleCommandExecute = (command: string) => {
    // Update repository state based on the command
    // Simulate Git command effects
    setIsLevelComplete(true); // Example condition for level completion
  };

  const nextLevel = () => {
    if (currentLevel < levels.length - 1) {
      setCurrentLevel(currentLevel + 1);
      setIsLevelComplete(false);
    } else {
      // Handle game completion
      alert("Congratulations! You've completed all levels!");
    }
  };

  return (
    <div className="game-main-layout flex h-screen">
      {/* Left Panel: Terminal, Instructions, Hints */}
      <div className="w-1/2 bg-gray-900 p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-4 text-white">Learn Git with Our Interactive Terminal</h2>
        <div className="level-info mb-4">
          <h3 className="text-xl font-semibold text-green-300">{levels[currentLevel].title}</h3>
          <p className="text-gray-400">{levels[currentLevel].description}</p>
          <p className="text-gray-400">Goal: {levels[currentLevel].goal}</p>
        </div>
        <GitTerminal onCommandExecute={handleCommandExecute} />
        <GitVisualizer repositoryState={repositoryState} />
        {isLevelComplete && (
          <button onClick={nextLevel} className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Next Level
          </button>
        )}
      </div>
      {/* Right Panel: Goal Visualizer */}
      <div className="w-1/2 bg-pink-400 p-6 flex flex-col items-center justify-center">
        <GoalVisualizer repositoryState={repositoryState} />
      </div>
    </div>
  );
};

export default GitGame; 