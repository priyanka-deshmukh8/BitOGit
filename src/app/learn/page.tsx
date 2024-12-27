"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, GitBranch, GitCommit, GitMerge, GitPullRequest } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LearnPage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <motion.h2 
          className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Master Git and Open Source
        </motion.h2>
        <motion.p 
          className="text-center mb-12 text-xl text-gray-400 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover essential Git skills, collaborate effectively, and deepen your understanding of open source development. From beginner to advanced, we've got you covered.
        </motion.p>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.3 }}>
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-gray-100 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-400" />
                  Git Basics
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Master the foundations of version control
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <GitCommit className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span><strong>Introduction to Version Control</strong> - Understand Git's role in modern development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <GitBranch className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span><strong>Setting Up Git</strong> - Configure Git for your development environment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <GitCommit className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span><strong>Basic Commands</strong> - Master essential Git operations</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full mt-4 border-gray-600 text-gray-800 hover:bg-gray-800 hover:text-gray-100">
                  <Link href="/learn/basics">Explore Git Basics</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.4 }}>
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-gray-100 flex items-center gap-2">
                  <GitBranch className="h-5 w-5 text-green-400" />
                  Intermediate Git
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Level up with powerful Git techniques
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <GitMerge className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <span><strong>Branching & Merging</strong> - Manage complex workflows and collaborate seamlessly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <GitCommit className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <span><strong>Rebasing</strong> - Learn to maintain a clean, linear project history</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <GitBranch className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <span><strong>Tagging & Releases</strong> - Mark important milestones in your project</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full mt-4 border-gray-600 text-gray-800 hover:bg-gray-800 hover:text-gray-100">
                  <Link href="/learn/intermediate">Explore Intermediate Git</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants} initial="hidden" animate="visible" transition={{ duration: 0.5, delay: 0.5 }}>
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-gray-100 flex items-center gap-2">
                  <GitPullRequest className="h-5 w-5 text-purple-400" />
                  Advanced Git & Open Source
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Master Git and contribute to open source
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <GitCommit className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                    <span><strong>Git Internals</strong> - Understand how Git works under the hood</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <GitPullRequest className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                    <span><strong>Contributing to Open Source</strong> - Learn the etiquette and process of open source contributions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <GitMerge className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                    <span><strong>Advanced Workflows</strong> - Explore Git hooks, submodules, and more</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full mt-4 border-gray-600 text-gray-800 hover:bg-gray-800 hover:text-gray-100">
                  <Link href="/learn/advanced">Explore Advanced Topics</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
            Ready to start your journey?
          </h3>
          <Button asChild size="lg" className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-gray-100">
            <Link href="/learn/basics">Begin with Git Basics</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}


