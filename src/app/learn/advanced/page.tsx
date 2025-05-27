import React from 'react';

const gitConcepts = [
  {
    title: "Git Internals",
    description: "Understanding Git's internal architecture including objects (blobs, trees, commits), references, and the working directory structure.",
  },
  {
    title: "Git Hooks",
    description: "Custom scripts that Git executes before or after events such as commit, push, and receive. They allow you to automate tasks and enforce policies.",
  },
  {
    title: "Git Submodules",
    description: "A way to include one Git repository as a subdirectory of another Git repository, allowing you to manage project dependencies.",
  },
  {
    title: "Git Worktree",
    description: "A feature that allows you to check out multiple branches simultaneously in different directories, enabling parallel development.",
  },
  {
    title: "Git Bisect",
    description: "A powerful debugging tool that uses binary search to find which commit introduced a bug or regression.",
  },
  {
    title: "Git Reflog",
    description: "A reference log that records when branch tips and other references were updated, helping recover lost commits.",
  },
  {
    title: "Git Filter-branch",
    description: "A tool for rewriting Git history, allowing you to modify commits, remove sensitive data, or restructure repositories.",
  },
];

const gitCommands = [
  { command: "git submodule add <repository> [<path>]", explanation: "Add a Git repository as a submodule to your project." },
  { command: "git worktree add <path> <branch>", explanation: "Create a new working tree for a branch in a separate directory." },
  { command: "git bisect start", explanation: "Start a bisect session to find a problematic commit." },
  { command: "git reflog show", explanation: "Display the reference log, showing all recent actions." },
  { command: "git filter-branch --tree-filter 'command' HEAD", explanation: "Rewrite Git history using a tree filter." },
  { command: "git gc --aggressive", explanation: "Aggressively optimize the repository by removing unnecessary files and compressing objects." },
  { command: "git update-ref -d HEAD", explanation: "Delete a reference (dangerous, use with caution)." },
  { command: "git show-ref", explanation: "List all references in the repository." },
];

const advancedWorkflows = [
  {
    title: "Git Flow",
    description: "A branching model that defines specific branch roles and how they should interact. It includes main, develop, feature, release, and hotfix branches.",
  },
  {
    title: "Trunk-Based Development",
    description: "A branching strategy where developers work on short-lived feature branches and merge frequently into the main branch.",
  },
  {
    title: "GitHub Flow",
    description: "A lightweight, branch-based workflow that supports teams and projects that deploy regularly.",
  },
];

const GitAdvancedPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100 p-8">
    <h1 className="text-4xl font-bold mb-6 text-center">Advanced Git & Open Source</h1>
    
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Advanced Git Concepts</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {gitConcepts.map((concept) => (
          <div key={concept.title} className="bg-gray-800 rounded-lg p-6 shadow">
            <h3 className="text-xl font-bold mb-2 text-purple-400">{concept.title}</h3>
            <p>{concept.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Advanced Git Commands</h2>
      <div className="bg-gray-800 rounded-lg p-6 shadow">
        <ul className="space-y-3">
          {gitCommands.map((cmd) => (
            <li key={cmd.command}>
              <span className="font-mono bg-gray-900 px-2 py-1 rounded text-purple-300">{cmd.command}</span>
              <span className="ml-3">{cmd.explanation}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Advanced Workflows</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {advancedWorkflows.map((workflow) => (
          <div key={workflow.title} className="bg-gray-800 rounded-lg p-6 shadow">
            <h3 className="text-xl font-bold mb-2 text-purple-400">{workflow.title}</h3>
            <p>{workflow.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Contributing to Open Source</h2>
      <div className="bg-gray-800 rounded-lg p-6 shadow">
        <ul className="space-y-4">
          <li className="flex items-start gap-2">
            <span className="text-purple-400">•</span>
            <span><strong>Understanding Project Structure</strong> - Learn how to navigate and understand large open-source codebases.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-400">•</span>
            <span><strong>Code Review Process</strong> - Master the art of reviewing code and providing constructive feedback.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-400">•</span>
            <span><strong>Documentation</strong> - Learn how to write clear, maintainable documentation for your contributions.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-400">•</span>
            <span><strong>Community Guidelines</strong> - Understand the importance of following project guidelines and code of conduct.</span>
          </li>
        </ul>
      </div>
    </section>

    <div className="flex justify-center mt-8">
      <a href="/git-game" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow transition">
        Try the Interactive Git Game
      </a>
    </div>
  </div>
);

export default GitAdvancedPage; 