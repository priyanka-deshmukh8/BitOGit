import React from 'react';

const gitConcepts = [
  {
    title: "Remote Repository",
    description: "A remote repository is a version of your project hosted on the internet or network, allowing collaboration with others.",
  },
  {
    title: "Fetch",
    description: "Fetching downloads new data from a remote repository without integrating it into your working files.",
  },
  {
    title: "Pull",
    description: "Pulling fetches and integrates changes from a remote repository into your current branch.",
  },
  {
    title: "Push",
    description: "Pushing sends your committed changes to a remote repository, making them available to others.",
  },
  {
    title: "Rebase",
    description: "Rebasing moves or combines a sequence of commits to a new base commit, helping to maintain a linear project history.",
  },
  {
    title: "Stash",
    description: "Stashing temporarily shelves changes you've made to your working copy so you can work on something else, then come back and re-apply them later.",
  },
  {
    title: "Cherry-pick",
    description: "Cherry-picking applies the changes introduced by some existing commits onto your current branch.",
  },
];

const gitCommands = [
  { command: "git remote add origin <url>", explanation: "Add a remote repository named 'origin'." },
  { command: "git fetch origin", explanation: "Download objects and refs from another repository." },
  { command: "git pull origin main", explanation: "Fetch and merge changes from the 'main' branch of 'origin'." },
  { command: "git push origin main", explanation: "Push your commits to the 'main' branch of 'origin'." },
  { command: "git rebase main", explanation: "Reapply your changes on top of another base tip (e.g., 'main')." },
  { command: "git stash", explanation: "Stash your local changes temporarily." },
  { command: "git stash pop", explanation: "Re-apply the most recently stashed changes." },
  { command: "git cherry-pick <commit>", explanation: "Apply the changes from a specific commit onto your current branch." },
];

const GitIntermediatePage = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100 p-8">
    <h1 className="text-4xl font-bold mb-6 text-center">Explore Git Intermediate</h1>
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Intermediate Concepts</h2>
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
      <h2 className="text-2xl font-semibold mb-4">Common Intermediate Git Commands</h2>
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

export default GitIntermediatePage; 