"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Code2, GitBranch, GitPullRequest, GitCommit, GitMerge, Users, Star, Zap, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProgressTracker from "@/components/ProgressTracker";
import { useProgress } from "@/context/ProgressContext";

export default function LearnPage() {
  const { progress } = useProgress();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-background dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800 text-foreground dark:text-gray-300">
      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-8">
          <motion.div
            className="inline-block p-2 px-4 rounded-full bg-muted dark:bg-gray-800/50 border border-border dark:border-gray-700 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BookOpen className="w-6 h-6 inline-block mr-2 text-primary dark:text-blue-400" />
            <span className="text-sm font-medium text-foreground dark:text-gray-300">Interactive Git Learning</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary to-primary/80 dark:from-gray-100 dark:via-blue-400 dark:to-purple-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Master Git Through Practice
          </motion.h1>

          <motion.p 
            className="text-xl text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Learn version control through interactive exercises, real-world scenarios, and hands-on practice. Start your journey to becoming a Git expert.
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white">
              <Link href="#learning-paths">View Learning Paths</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border dark:border-gray-700 hover:border-primary/50 dark:hover:border-gray-600">
              <Link href="/git-game">Play Git Game</Link>
            </Button>
          </motion.div>
        </section>

        {/* Quick Stats */}
        <motion.section 
          className="grid md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {[
            {
              icon: <GitPullRequest className="h-8 w-8 text-primary dark:text-blue-400" />,
              title: "Active Learners",
              value: "1,000+"
            },
            {
              icon: <Users className="h-8 w-8 text-primary dark:text-green-400" />,
              title: "Community Members",
              value: "500+"
            },
            {
              icon: <Star className="h-8 w-8 text-primary dark:text-yellow-400" />,
              title: "Completed Exercises",
              value: "2,500+"
            },
            {
              icon: <Code2 className="h-8 w-8 text-primary dark:text-purple-400" />,
              title: "Git Commands",
              value: "50+"
            }
          ].map((stat, index) => (
            <Card key={index} className="bg-card dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 border-border dark:border-gray-700 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-muted dark:bg-gray-800/50">
                    {stat.icon}
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 dark:from-blue-400 dark:to-purple-400">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground dark:text-gray-400">{stat.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.section>

        {/* Learning Paths */}
        <motion.section 
          id="learning-paths"
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground dark:from-gray-100 dark:to-gray-400">
            Learning Paths
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <GitBranch className="h-8 w-8 text-primary dark:text-blue-400" />,
                title: "Git Fundamentals",
                description: "Master the basics of version control with Git. Learn essential commands and concepts.",
                topics: ["Repository Basics", "Commits & History", "Branching & Merging"]
              },
              {
                icon: <GitPullRequest className="h-8 w-8 text-primary dark:text-green-400" />,
                title: "Collaboration",
                description: "Learn how to work effectively with others using Git. Master remote repositories and pull requests.",
                topics: ["Remote Repositories", "Pull Requests", "Code Review"]
              },
              {
                icon: <GitMerge className="h-8 w-8 text-primary dark:text-yellow-400" />,
                title: "Advanced Git",
                description: "Take your Git skills to the next level with advanced techniques and workflows.",
                topics: ["Rebasing", "Cherry-picking", "Git Hooks"]
              }
            ].map((path, index) => (
              <Card key={index} className="bg-card dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 border-border dark:border-gray-700 shadow-lg">
                <CardHeader>
                  <div className="mb-4">{path.icon}</div>
                  <CardTitle className="text-xl font-bold text-foreground dark:text-gray-100">{path.title}</CardTitle>
                  <CardDescription className="text-muted-foreground dark:text-gray-400">{path.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {path.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center text-muted-foreground dark:text-gray-400">
                        <Zap className="h-4 w-4 mr-2 text-primary dark:text-blue-400" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white"
                    asChild
                  >
                    <Link href={`/learn/${path.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      Start Learning
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Features */}
        <motion.section 
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground dark:from-gray-100 dark:to-gray-400">
            Why Learn with Us?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Lightbulb className="h-8 w-8 text-primary dark:text-blue-400" />,
                title: "Interactive Learning",
                description: "Learn by doing with our interactive exercises and real-world scenarios."
              },
              {
                icon: <Users className="h-8 w-8 text-primary dark:text-green-400" />,
                title: "Community Support",
                description: "Get help from experienced developers and learn from your peers."
              },
              {
                icon: <Code2 className="h-8 w-8 text-primary dark:text-yellow-400" />,
                title: "Practical Projects",
                description: "Apply your knowledge to real projects and build your portfolio."
              },
              {
                icon: <Star className="h-8 w-8 text-primary dark:text-purple-400" />,
                title: "Gamified Experience",
                description: "Make learning fun with our Git learning game and achievement system."
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-card dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 border-border dark:border-gray-700 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-muted dark:bg-gray-800/50">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground dark:text-gray-100">{feature.title}</h3>
                      <p className="text-muted-foreground dark:text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="bg-card dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 border-border dark:border-gray-700 shadow-lg">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 dark:from-blue-400 dark:to-purple-400 mb-4">
                Ready to Start Learning?
              </h2>
              <p className="text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto mb-8">
                Begin your Git learning journey today and join our community of developers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white"
                  asChild
                >
                  <Link href="#learning-paths">View Learning Paths</Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-border dark:border-gray-700 hover:border-primary/50 dark:hover:border-gray-600"
                  asChild
                >
                  <Link href="/git-game">Play Git Game</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}


