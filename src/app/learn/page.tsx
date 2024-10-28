// pages/learn.js
"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function LearnPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">Learn Git</h2>
      <p className="text-center mb-12 text-xl">
        Discover essential Git skills to streamline your version control workflow, collaborate effectively, and deepen your understanding of Git internals.
      </p>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover-lift border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-600">Git Basics</CardTitle>
            <CardDescription className="text-black">
              Master the foundations of version control.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li><strong>Introduction to Version Control</strong> - Understand the purpose of Git and its role in version control.</li>
              <li><strong>Setting Up Git</strong> - Learn the steps for configuring Git for the first time.</li>
              <li><strong>Basic Commands</strong> - Get hands-on with essential commands like `git init`, `git add`, `git commit`, and `git status`.</li>
            </ul>
            <a href="/learn/basics" className="text-blue-600 underline mt-4 inline-block">Explore Git Basics →</a>
          </CardContent>
        </Card>

        <Card className="hover-lift border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-600">Intermediate Git</CardTitle>
            <CardDescription className="text-black">
              Build on the basics with powerful Git tools.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li><strong>Branching & Merging</strong> - Learn to manage branches and merge changes seamlessly.</li>
              <li><strong>Rebasing</strong> - Discover how to clean up commit history and keep it linear.</li>
              <li><strong>Tagging</strong> - Use tags to mark important points in your project’s history.</li>
            </ul>
            <a href="/learn/intermediate" className="text-blue-600 underline mt-4 inline-block">Explore Intermediate Git →</a>
          </CardContent>
        </Card>

        <Card className="hover-lift border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-600">Advanced Topics</CardTitle>
            <CardDescription className="text-black">
              Dive deeper into Git for power users.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li><strong>Stashing</strong> - Temporarily save work without committing, and return to it anytime.</li>
              <li><strong>Cherry-picking</strong> - Apply specific commits from one branch to another.</li>
              <li><strong>Git Internals</strong> - Peek under the hood to understand how Git works.</li>
            </ul>
            <a href="/learn/advanced" className="text-blue-600 underline mt-4 inline-block">Explore Advanced Topics →</a>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}