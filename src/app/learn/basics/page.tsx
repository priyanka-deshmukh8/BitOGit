import React from 'react';

const gitConcepts = [
  {
    title: "Repository",
    description: "A repository is a storage space for your project. It can be local to a folder on your computer or hosted on a remote server.",
  },
  {
    title: "Commit",
    description: "A commit is a snapshot of your repository at a specific point in time. It records changes to one or more files.",
  },
  {
    title: "Branch",
    description: "A branch is a parallel version of your repository. It allows you to work on different features or fixes independently.",
  },
  {
    title: "Merge",
    description: "Merging takes the changes from one branch and applies them into another. This is how you combine work from different branches.",
  },
];

const gitCommands = [
  { command: "git init", explanation: "Initialize a new Git repository." },
  { command: "git add .", explanation: "Stage all changes for the next commit." },
  { command: "git commit -m 'message'", explanation: "Commit staged changes with a message." },
  { command: "git branch feature", explanation: "Create a new branch named 'feature'." },
  { command: "git checkout feature", explanation: "Switch to the 'feature' branch." },
  { command: "git merge feature", explanation: "Merge the 'feature' branch into the current branch." },
];

const GitBasicsPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100 p-8">
    <h1 className="text-4xl font-bold mb-6 text-center">Explore Git Basics</h1>
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">What is Git?</h2>
      <p className="text-lg mb-2">
        Git is a distributed version control system that helps you track changes in your code, collaborate with others, and manage your project history efficiently.
      </p>
    </section>
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {gitConcepts.map((concept) => (
          <div key={concept.title} className="bg-gray-800 rounded-lg p-6 shadow">
            <h3 className="text-xl font-bold mb-2 text-pink-400">{concept.title}</h3>
            <p>{concept.description}</p>
          </div>
        ))}
      </div>
    </section>
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Common Git Commands</h2>
      <div className="bg-gray-800 rounded-lg p-6 shadow">
        <ul className="space-y-3">
          {gitCommands.map((cmd) => (
            <li key={cmd.command}>
              <span className="font-mono bg-gray-900 px-2 py-1 rounded text-pink-300">{cmd.command}</span>
              <span className="ml-3">{cmd.explanation}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
    <div className="flex justify-center mt-8">
      <a href="/git-game" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg shadow transition">
        Try the Interactive Git Game
      </a>
    </div>
  </div>
);

export default GitBasicsPage; 