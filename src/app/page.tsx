"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Code, Star, GitFork, ExternalLink } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card"

const featuredProjects = [
  {
    name: "BitOGit",
    description: "An open-source initiative dedicated to making version control accessible to everyone.",
    tech: "Next.js, TypeScript, Tailwind",
    url: "https://github.com/priyanka-deshmukh8/BitOGit.git",
    stars: 45,
    forks: 12,
    language: "TypeScript",
    tags: ["documentation", "learning"]
  },
  {
    name: "Barter",
    description: "A modern bartering platform for exchanging goods and services.",
    tech: "React, Node.js, MongoDB",
    url: "https://github.com/priyanka-deshmukh8/barter.git",
    stars: 32,
    forks: 8,
    language: "JavaScript",
    tags: ["full-stack", "marketplace"]
  },
  {
    name: "Dating App",
    description: "Premium dating mobile application with modern UI and features.",
    tech: "React Native, Expo",
    url: "https://github.com/priyanka-deshmukh8/Dating-mobile-App.git",
    stars: 28,
    forks: 6,
    language: "React Native",
    tags: ["mobile", "ui-design"]
  }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-300">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center space-y-8">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Kickstart Your Open Source Journey
        </motion.h1>
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
          <Button asChild size="lg" className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800">
            <Link href="/learn">Start Learning</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-gray-700 hover:bg-gray-800 text-gray-700">
            <Link href="/contribute">Contribute</Link>
          </Button>
          <Button asChild size="lg" className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
            <Link href="/game">Play Git Learning Game</Link>
          </Button>
          <Button asChild size="lg" className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
            <Link href="/hackathons">View Hackathons</Link>
          </Button>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-gray-100">
                    <span>{project.name}</span>
                    <Link 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-100 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Code className="h-4 w-4 text-blue-400" />
                      <span className="text-sm text-gray-300">{project.tech}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <Badge 
                          key={tag}
                          variant="secondary"
                          className="bg-gray-700 text-gray-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center border-t border-gray-700 mt-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-sm text-gray-400">
                      <Star className="h-4 w-4" />
                      {project.stars}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-400">
                      <GitFork className="h-4 w-4" />
                      {project.forks}
                    </span>
                  </div>
                  <Button 
                    variant="ghost" 
                    className="text-gray-300 hover:text-gray-200 hover:bg-gray-800"
                    asChild
                  >
                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                      View Project
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
            Ready to Start Contributing?
          </h2>
          <p className="text-xl text-gray-400">
            Join our community and start your open source journey today.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800">
              <Link href="/community">Join Community</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gray-700 hover:bg-gray-800 hover:text-gray-200 text-gray-700">
              <Link href="/learn">Start Learning</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

