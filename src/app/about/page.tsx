"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Users, Github, BookOpen, Code2, Lightbulb, Heart, Star, GitBranch, 
  Award, Rocket, Globe, Shield, Zap, Target, BookMarked, GitPullRequest, 
  GitCommit, GitFork, GitMerge, Terminal } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-300">
      <header className="container mx-auto px-4 py-6">
        {/* <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">bit0git</Link>
          {/* <div className="space-x-4">
            <Button asChild variant="ghost" className="text-gray-300 hover:text-gray-100">
              <Link href="/">Home</Link>
            </Button>
            <Button variant="ghost" className="text-gray-300 hover:text-gray-100">Projects</Button>
            <Button variant="ghost" className="text-gray-300 hover:text-gray-100">Learn</Button>
            <Button variant="ghost" className="text-gray-300 hover:text-gray-100">Community</Button>
          </div>
        </nav> */} 
      </header>

      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Hero Section */}
        <motion.section 
          className="text-center space-y-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block p-2 px-4 rounded-full bg-gray-800/50 border border-gray-700 mb-4">
            <GitBranch className="w-6 h-6 inline-block mr-2 text-blue-400" />
            <span className="text-sm font-medium text-gray-300">Open Source Project</span>
          </div>
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-blue-400 to-purple-400">
            About bit0git
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Making version control accessible to everyone through interactive learning and practical experience.
          </p>
        </motion.section>

        {/* Mission and Vision */}
        <motion.section 
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp}>
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-bold text-gray-100">
                  <Lightbulb className="h-6 w-6 text-yellow-400" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg">
                  To empower developers of all levels with practical Git knowledge and foster a collaborative open-source community. We believe that understanding version control is essential for modern development.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-bold text-gray-100">
                  <Star className="h-6 w-6 text-purple-400" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg">
                  To become the go-to platform for learning Git, where developers can master version control through interactive experiences and real-world scenarios.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        {/* Core Values Section */}
        <motion.section 
          className="space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl font-bold text-center text-gray-100 mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Target className="h-8 w-8 text-red-400" />,
                title: "Accessibility First",
                description: "We believe Git learning should be accessible to everyone, regardless of their background or experience level. Our platform is designed to be inclusive and welcoming to all developers."
              },
              {
                icon: <Shield className="h-8 w-8 text-blue-400" />,
                title: "Quality Education",
                description: "We maintain high standards in our learning materials, ensuring that every lesson and exercise provides real value and practical knowledge that developers can apply immediately."
              },
              {
                icon: <Globe className="h-8 w-8 text-green-400" />,
                title: "Community Driven",
                description: "Our strength comes from our diverse community of contributors and learners. We foster collaboration and knowledge sharing to create a supportive learning environment."
              }
            ].map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg h-full hover:border-gray-600 transition-colors">
                  <CardHeader>
                    <div className="mb-4">{value.icon}</div>
                    <CardTitle className="text-xl font-bold text-gray-100">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section 
          className="space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl font-bold text-center text-gray-100 mb-8">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <BookOpen className="h-8 w-8 text-blue-400" />,
                title: "Interactive Learning",
                description: "Learn Git through hands-on exercises and real-world scenarios. Our interactive lessons guide you from basic concepts to advanced techniques.",
                features: [
                  "Step-by-step tutorials",
                  "Interactive exercises",
                  "Real-world examples",
                  "Progress tracking"
                ]
              },
              {
                icon: <Code2 className="h-8 w-8 text-green-400" />,
                title: "Practical Experience",
                description: "Practice Git commands in a safe, simulated environment. Build confidence through practical application of version control concepts.",
                features: [
                  "Command-line practice",
                  "Branch management",
                  "Merge conflict resolution",
                  "Collaboration workflows"
                ]
              },
              {
                icon: <Users className="h-8 w-8 text-purple-400" />,
                title: "Community Support",
                description: "Join a community of learners and contributors. Get help, share knowledge, and grow together with fellow developers.",
                features: [
                  "Discussion forums",
                  "Code reviews",
                  "Mentorship opportunities",
                  "Community events"
                ]
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg h-full hover:border-gray-600 transition-colors">
                  <CardHeader>
                    <div className="mb-4">{feature.icon}</div>
                    <CardTitle className="text-xl font-bold text-gray-100">{feature.title}</CardTitle>
                    <CardDescription className="text-gray-400 mt-2">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                          <Zap className="h-4 w-4 text-yellow-400 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Learning Path Section */}
        <motion.section 
          className="space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl font-bold text-gray-100">
                <BookMarked className="h-6 w-6 text-blue-400" />
                Learning Path
              </CardTitle>
              <CardDescription className="text-gray-400">
                A structured approach to mastering Git, from basics to advanced concepts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    title: "Fundamentals",
                    icon: <GitCommit className="h-6 w-6 text-green-400" />,
                    topics: ["Repository basics", "Commits", "Branches", "Remote operations"]
                  },
                  {
                    title: "Collaboration",
                    icon: <GitPullRequest className="h-6 w-6 text-blue-400" />,
                    topics: ["Pull requests", "Code review", "Team workflows", "Conflict resolution"]
                  },
                  {
                    title: "Advanced",
                    icon: <GitMerge className="h-6 w-6 text-purple-400" />,
                    topics: ["Rebasing", "Cherry-picking", "Git hooks", "Advanced workflows"]
                  },
                  {
                    title: "Best Practices",
                    icon: <Award className="h-6 w-6 text-yellow-400" />,
                    topics: ["Commit messages", "Branch strategy", "Code organization", "Security"]
                  }
                ].map((level, index) => (
                  <motion.div 
                    key={index} 
                    variants={fadeInUp}
                    className="bg-gray-800/50 rounded-lg p-4 border border-gray-700"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      {level.icon}
                      <h3 className="font-semibold text-gray-100">{level.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {level.topics.map((topic, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-center">
                          <Rocket className="h-3 w-3 text-gray-500 mr-2" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Team Section */}
        <motion.section 
          className="space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl font-bold text-gray-100">
                <Users className="h-6 w-6 text-blue-400" />
                Join Our Community
              </CardTitle>
              <CardDescription className="text-gray-400">
                We're a community of passionate developers working together to make Git learning accessible to everyone.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-100">Why Contribute?</h3>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-red-400" />
                      Make a positive impact on the developer community
                    </li>
                    <li className="flex items-center gap-2">
                      <Code2 className="h-5 w-5 text-green-400" />
                      Improve your Git and open-source skills
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-blue-400" />
                      Connect with like-minded developers
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-100">How to Get Started</h3>
                  <div className="space-y-3 text-gray-400">
                    <p>1. Fork our repository on GitHub</p>
                    <p>2. Clone your fork locally</p>
                    <p>3. Create a new branch for your feature</p>
                    <p>4. Submit a pull request</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                <Link href="https://github.com/priyanka-deshmukh8/BitOGit" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> Contribute on GitHub
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto border-gray-700 hover:border-gray-600">
                <Link href="/contribute">
                  Learn More About Contributing
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.section>

        {/* Stats Section */}
        <motion.section 
          className="space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl font-bold text-center text-gray-100 mb-8">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                label: "Active Contributors", 
                value: "50+",
                description: "Dedicated developers improving the platform"
              },
              { 
                label: "Git Commands", 
                value: "100+",
                description: "Comprehensive command coverage"
              },
              { 
                label: "Interactive Lessons", 
                value: "25+",
                description: "Hands-on learning experiences"
              },
              { 
                label: "Community Members", 
                value: "1000+",
                description: "Growing global community"
              }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-700 hover:border-gray-600 transition-colors"
              >
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-300 mt-2">{stat.label}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section 
          className="text-center space-y-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                Start Your Git Journey Today
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                Join thousands of developers who are mastering Git with bit0git. Whether you're a beginner or looking to enhance your skills, we have the resources to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  <Link href="/learn">
                    <BookOpen className="mr-2 h-4 w-4" /> Start Learning
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-gray-700 hover:border-gray-600">
                  <Link href="/contribute">
                    <GitFork className="mr-2 h-4 w-4" /> Contribute
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </main>
    </div>
  )
}

