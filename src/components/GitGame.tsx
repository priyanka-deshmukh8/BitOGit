import React, { useState } from 'react';
import GitTerminal from './GitTerminal';

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

  const handleLevelComplete = () => {
    setIsLevelComplete(true);
    // Optionally, provide feedback or rewards
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
    <div className="game-container">
      <h2 className="text-2xl font-bold mb-4">Learn Git with Our Interactive Terminal</h2>
      <div className="level-info mb-4">
        <h3 className="text-xl font-semibold">{levels[currentLevel].title}</h3>
        <p className="text-gray-400">{levels[currentLevel].description}</p>
        <p className="text-gray-400">Goal: {levels[currentLevel].goal}</p>
      </div>
      <GitTerminal onCommandExecute={handleLevelComplete} />
      {isLevelComplete && (
        <button onClick={nextLevel} className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Next Level
        </button>
      )}
    </div>
  );
};

export default GitGame; 