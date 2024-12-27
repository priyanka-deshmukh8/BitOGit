// pages/contribute.js
"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { GitBranch, GitPullRequest, Book, Star, GitFork, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const featuredProjects = [
  {
    name: "BitOGit",
    description: "An open-source initiative dedicated to making version control accessible to everyone.",
    tech: "Next.js, TypeScript, Tailwind",
    url: "https://github.com/priyanka-deshmukh8/BitOGit.git",
    difficulty: "Beginner Friendly",
    tags: ["documentation", "ui-enhancement", "learning-resources"]
  },
  {
    name: "Dating Mobile App",
    description: "Premium dating app with swipe gestures and match animations built with React Native.",
    tech: "React Native, TypeScript, Expo",
    url: "https://github.com/priyanka-deshmukh8/Dating-mobile-App.git",
    difficulty: "Intermediate",
    tags: ["mobile-app", "react-native", "ui-design"]
  },
  {
    name: "Weather Application",
    description: "React-based weather application providing real-time weather information.",
    tech: "React, JavaScript",
    url: "https://github.com/priyanka-deshmukh8/react-weather-aplication.git",
    difficulty: "Beginner",
    tags: ["react", "api-integration", "weather-data"]
  }
];

export default function ContributePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <motion.h2 
          className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contribute to BitOGit
        </motion.h2>
        
        <motion.p 
          className="text-center mb-12 text-xl text-gray-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Help us improve BitOGit by contributing your expertise, ideas, and skills!
        </motion.p>

        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 mb-8">
            Featured Projects
          </h2>
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
                    <CardTitle className="text-gray-100 flex items-center justify-between">
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
                        <GitBranch className="h-4 w-4 text-blue-400" />
                        <span className="text-sm text-gray-300">{project.tech}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span 
                            key={tag}
                            className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center border-t border-gray-700 mt-4">
                    <span className="text-sm text-gray-400">
                      <Star className="h-4 w-4 inline mr-1" />
                      {project.difficulty}
                    </span>
                    <Button 
                      variant="ghost" 
                      className="text-gray-200 hover:text-gray-600 hover:bg-gray-800 "
                      asChild
                    >
                      <Link href={project.url} target="_blank" rel="noopener noreferrer ">
                        Contribute
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-100">
                <GitBranch className="h-6 w-6" />
                How to Get Started
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-4">
                <li className="flex items-start gap-2">
                  <GitBranch className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Fork the repository on GitHub</span>
                </li>
                <li className="flex items-start gap-2">
                  <GitPullRequest className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Clone your fork locally and create a new branch</span>
                </li>
                <li className="flex items-start gap-2">
                  <Book className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Make your changes and test them locally</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Submit a pull request with a detailed description</span>
                </li>
              </ol>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-100">
                <Star className="h-6 w-6" />
                Looking for Ideas?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-200">Check out the open issues on our GitHub page, or pick one of these contribution ideas:</p>
              <ul className="list-disc list-inside space-y-4">
                <li className="flex items-start gap-2">
                  <Book className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Enhance documentation and learning resources</span>
                </li>
                <li className="flex items-start gap-2">
                  <GitPullRequest className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Improve the UI and user experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300"  >Suggest new features or topics to cover</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}