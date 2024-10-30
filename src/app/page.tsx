"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, BookOpen, Users, Github, Code, Star, GitFork } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { span } from "framer-motion/client"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-300">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          {/* <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">BitOGit</h1> */}
          {/* <div className="space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-gray-100">About</Button>
            <Button variant="ghost" className="text-gray-300 hover:text-gray-100">Projects</Button>
            <Button variant="ghost" className="text-gray-300 hover:text-gray-100">Learn</Button>
            <Button variant="ghost" className="text-gray-300 hover:text-gray-100">Community</Button>
          </div> */}
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <motion.h2 
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 lg:text-5xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Kickstart Your Open Source Journey
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            BitOGit empowers students and professionals to explore, contribute, and grow within the open-source community.
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-gray-100">
              <Link href="/signup">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 text-gray-900 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-300">
              Learn More
            </Button>
          </motion.div>
        </section>

        {/* Project Directory Preview */}
        <section className="space-y-6">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
            Discover Projects
          </h3>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-grow">
              <Input
                type="text"
                placeholder="Search projects..."
                className="w-full bg-gray-800 text-gray-100 border-gray-700"
              />
            </div>
            <Button className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-gray-100">
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((project) => (
              <Card key={project} className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-100">Rizz</CardTitle>
                  <CardDescription className="text-gray-400">A Gen-z Slange dictionary Application</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300">JavaScript</span>
                  </div>
                  <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                    Beginner Friendly 
                  </Badge>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-gray-300">123</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GitFork className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300">45</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="border-gray-600 text-gray-900 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-300">
              View All Projects
            </Button>
          </div>
        </section>

        {/* Learning Resources */}
        <section className="space-y-6">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
            Learning Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-100">
                  <BookOpen className="h-5 w-5" />
                  Git Basics
                </CardTitle>
                <CardDescription className="text-gray-400">Master the fundamentals of Git</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-300">
                <p>• Introduction to version control</p>
                <p>• Setting up Git</p>
                <p>• Basic Git commands</p>
                <p>• Branching and merging</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-100">
                  <Github className="h-5 w-5" />
                  Open Source Contribution Guide
                </CardTitle>
                <CardDescription className="text-gray-400">Learn how to contribute effectively</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-300">
                <p>• Finding projects to contribute to</p>
                <p>• Understanding project guidelines</p>
                <p>• Creating pull requests</p>
                <p>• Collaborating with maintainers</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="border-gray-600 text-gray-900 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-300">
              Explore All Resources
            </Button>
          </div>
        </section>

        {/* Community Engagement */}
        <section className="space-y-6">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
            Join Our Community
          </h3>
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-100">
                <Users className="h-5 w-5" />
                Connect and Grow
              </CardTitle>
              <CardDescription className="text-gray-400">Engage with fellow developers and mentors</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">Join our vibrant community to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Participate in discussions</li>
                <li>Find mentorship opportunities</li>
                <li>Collaborate on projects</li>
                <li>Attend virtual meetups and workshops</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-gray-100">
                Join Community
              </Button>
            </CardFooter>
          </Card>
        </section>
      </main>

      <footer className="border-t border-gray-800 mt-12 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500">© {new Date().getFullYear()} BitOGit. All rights reserved.</p>
            <nav className="flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-gray-300">About</Link>
              <Link href="#" className="text-gray-500 hover:text-gray-300">Privacy</Link>
              <Link href="#" className="text-gray-500 hover:text-gray-300">Terms</Link>
              <Link href="#" className="text-gray-500 hover:text-gray-300">Contact</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}