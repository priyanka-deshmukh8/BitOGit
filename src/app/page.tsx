"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { GitBranch, BookOpen, Code2, Users, Star, GitPullRequest, GitCommit, GitMerge } from 'lucide-react'

export default function LandingPage() {
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
            <GitBranch className="w-6 h-6 inline-block mr-2 text-primary dark:text-blue-400" />
            <span className="text-sm font-medium text-foreground dark:text-gray-300">Learn Git the Right Way</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary to-primary/80 dark:from-gray-100 dark:via-blue-400 dark:to-purple-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Master Git with Interactive Learning
          </motion.h1>

          <motion.p 
            className="text-xl text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Learn version control through hands-on exercises, real-world scenarios, and a supportive community. Start your journey to becoming a Git expert today.
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white">
              <Link href="/learn">Start Learning</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border dark:border-gray-700 hover:border-primary/50 dark:hover:border-gray-600">
              <Link href="/contribute">Contribute</Link>
            </Button>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white">
              <Link href="/git-game">Play Git Learning Game</Link>
            </Button>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white">
              <Link href="/hackathons">View Hackathons</Link>
            </Button>
          </motion.div>
        </section>

        {/* Featured Projects Section */}
        <motion.section 
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground dark:from-gray-100 dark:to-gray-400">
            Why Choose bit0git?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <BookOpen className="h-8 w-8 text-primary dark:text-blue-400" />,
                title: "Interactive Learning",
                description: "Learn through hands-on exercises and real-world scenarios that make Git concepts easy to understand."
              },
              {
                icon: <Code2 className="h-8 w-8 text-primary dark:text-green-400" />,
                title: "Practical Experience",
                description: "Practice Git commands in a safe environment and build confidence through practical application."
              },
              {
                icon: <Users className="h-8 w-8 text-primary dark:text-purple-400" />,
                title: "Community Support",
                description: "Join a community of learners and get help from experienced developers when you need it."
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-card dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 border-border dark:border-gray-700 shadow-lg">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl font-bold text-foreground dark:text-gray-100">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground dark:text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Learning Path Section */}
        <motion.section 
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground dark:from-gray-100 dark:to-gray-400">
            Your Learning Journey
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: <GitBranch className="h-8 w-8 text-primary dark:text-blue-400" />,
                title: "Fundamentals",
                description: "Master basic Git concepts and commands"
              },
              {
                icon: <GitPullRequest className="h-8 w-8 text-primary dark:text-green-400" />,
                title: "Collaboration",
                description: "Learn to work effectively with others"
              },
              {
                icon: <GitCommit className="h-8 w-8 text-primary dark:text-yellow-400" />,
                title: "Advanced Topics",
                description: "Explore complex Git workflows"
              },
              {
                icon: <GitMerge className="h-8 w-8 text-primary dark:text-purple-400" />,
                title: "Best Practices",
                description: "Follow industry standards and patterns"
              }
            ].map((step, index) => (
              <Card key={index} className="bg-card dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 border-border dark:border-gray-700 shadow-lg">
                <CardHeader>
                  <div className="mb-4">{step.icon}</div>
                  <CardTitle className="text-xl font-bold text-foreground dark:text-gray-100">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground dark:text-gray-400">{step.description}</p>
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
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="bg-card dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 border-border dark:border-gray-700 shadow-lg">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 dark:from-blue-400 dark:to-purple-400 mb-4">
                Ready to Start Contributing?
              </h2>
              <p className="text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto mb-8">
                Join our community and start your open source journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white"
                  asChild
                >
                  <Link href="/community">Join Community</Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-border dark:border-gray-700 hover:border-primary/50 dark:hover:border-gray-600"
                  asChild
                >
                  <Link href="/learn">Start Learning</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}

