// pages/contribute.js
"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { GitBranch, GitPullRequest, Book, Star, ExternalLink, 
  Github, Code2, Users, Award, Zap, Heart, Globe, 
  GitCommit, GitMerge, Terminal, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

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

const featuredProjects = [
  {
    name: "bit0git",
    description: "An open-source initiative dedicated to making version control accessible to everyone.",
    tech: "Next.js, TypeScript, Tailwind",
    url: "https://github.com/priyanka-deshmukh8/bit0git.git",
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
    <div className="min-h-screen bg-background dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800 text-foreground dark:text-gray-300">
      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Hero Section */}
        <motion.section 
          className="text-center space-y-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block p-2 px-4 rounded-full bg-muted dark:bg-gray-800/50 border border-border dark:border-gray-700 mb-4">
            <GitBranch className="w-6 h-6 inline-block mr-2 text-primary dark:text-blue-400" />
            <span className="text-sm font-medium text-foreground dark:text-gray-300">Open Source</span>
          </div>
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary to-primary/80 dark:from-gray-100 dark:via-blue-400 dark:to-purple-400">
            Contribute to bit0git
          </h1>
          <p className="text-xl text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto">
            Help us improve bit0git by contributing your expertise, ideas, and skills. Together, we can make version control accessible to everyone.
          </p>
        </motion.section>

        {/* Quick Stats */}
        <motion.section 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {[
            { icon: <GitPullRequest className="h-6 w-6 text-primary dark:text-blue-400" />, label: "Open PRs", value: "25+" },
            { icon: <Users className="h-6 w-6 text-primary dark:text-green-400" />, label: "Contributors", value: "50+" },
            { icon: <Star className="h-6 w-6 text-primary dark:text-yellow-400" />, label: "GitHub Stars", value: "100+" },
            { icon: <Code2 className="h-6 w-6 text-primary dark:text-purple-400" />, label: "Projects", value: "10+" }
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              className="bg-card/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-border dark:border-gray-700 hover:border-primary/50 dark:hover:border-gray-600 transition-colors"
            >
              <div className="flex justify-center mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 dark:from-blue-400 dark:to-purple-400">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground dark:text-gray-400 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.section>

        {/* Featured Projects - Enhanced */}
        <motion.section
          className="space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground dark:from-gray-100 dark:to-gray-400">
              Featured Projects
            </h2>
            <Button 
              variant="outline" 
              className="border-border dark:border-gray-700 hover:border-primary/50 dark:hover:border-gray-600"
              asChild
            >
              <Link href="https://github.com/priyanka-deshmukh8/BitOGit/issues" target="_blank" rel="noopener noreferrer">
                <PlusCircle className="mr-2 h-4 w-4" />
                Submit Project
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                variants={fadeInUp}
              >
                <Card className="bg-card dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 border-border dark:border-gray-700 shadow-lg h-full flex flex-col hover:border-primary/50 dark:hover:border-gray-600 transition-colors">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-foreground dark:text-gray-100 flex items-center gap-2">
                        <Github className="h-5 w-5 text-muted-foreground dark:text-gray-400" />
                        {project.name}
                      </CardTitle>
                      <Link 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground dark:text-gray-400 hover:text-foreground dark:hover:text-gray-100 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </Link>
                    </div>
                    <CardDescription className="text-muted-foreground dark:text-gray-400 mt-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Code2 className="h-4 w-4 text-primary dark:text-blue-400" />
                        <span className="text-sm text-muted-foreground dark:text-gray-400">{project.tech}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <Badge 
                            key={tag}
                            variant="secondary"
                            className="bg-muted dark:bg-gray-800 text-muted-foreground dark:text-gray-400 hover:bg-muted/80 dark:hover:bg-gray-700"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center border-t border-border dark:border-gray-700 mt-4 pt-4">
                    <Badge variant="outline" className="border-border dark:border-gray-700">
                      <Star className="h-3 w-3 mr-1 text-primary dark:text-yellow-400" />
                      {project.difficulty}
                    </Badge>
                    <Button 
                      variant="ghost" 
                      className="text-foreground dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 hover:bg-muted dark:hover:bg-gray-800"
                      asChild
                    >
                      <Link href={project.url} target="_blank" rel="noopener noreferrer">
                        <GitPullRequest className="mr-2 h-4 w-4" />
                        Contribute
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Submit Your Project Section - New */}
        <motion.section 
          className="space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <Card className="bg-card dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 border-border dark:border-gray-700 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground dark:text-gray-100">
                <PlusCircle className="h-6 w-6 text-primary dark:text-blue-400" />
                Submit Your Open Source Project
              </CardTitle>
              <CardDescription className="text-muted-foreground dark:text-gray-400">
                Have an open source project that could benefit the community? Submit it to be featured on bit0git!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground dark:text-gray-100">Project Requirements</h3>
                  <ul className="space-y-3 text-muted-foreground dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-primary dark:text-blue-400 mt-1" />
                      Must be open source and publicly accessible
                    </li>
                    <li className="flex items-start gap-2">
                      <Heart className="h-5 w-5 text-primary dark:text-red-400 mt-1" />
                      Should have clear documentation and contribution guidelines
                    </li>
                    <li className="flex items-start gap-2">
                      <Globe className="h-5 w-5 text-primary dark:text-green-400 mt-1" />
                      Must be actively maintained and community-friendly
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-primary dark:text-yellow-400 mt-1" />
                      Should align with our mission of making development accessible
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground dark:text-gray-100">Submission Process</h3>
                  <ol className="space-y-3 text-muted-foreground dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-primary dark:text-blue-400 font-medium">1.</span>
                      Create a detailed issue on our GitHub repository
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary dark:text-blue-400 font-medium">2.</span>
                      Include project description, tech stack, and goals
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary dark:text-blue-400 font-medium">3.</span>
                      Add links to repository and documentation
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary dark:text-blue-400 font-medium">4.</span>
                      Wait for community review and approval
                    </li>
                  </ol>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white"
                asChild
              >
                <Link href="https://github.com/priyanka-deshmukh8/BitOGit/issues/new" target="_blank" rel="noopener noreferrer">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Submit Project
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-border dark:border-gray-700 hover:border-primary/50 dark:hover:border-gray-600"
                asChild
              >
                <Link href="https://github.com/priyanka-deshmukh8/BitOGit/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">
                  <Book className="mr-2 h-4 w-4" />
                  View Guidelines
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.section>

        {/* How to Get Started - Enhanced */}
        <motion.section 
          className="space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <Card className="bg-card dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 border-border dark:border-gray-700 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground dark:text-gray-100">
                <Terminal className="h-6 w-6 text-primary dark:text-blue-400" />
                How to Get Started
              </CardTitle>
              <CardDescription className="text-muted-foreground dark:text-gray-400">
                Follow these steps to start contributing to our projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground dark:text-gray-100">Basic Steps</h3>
                  <ol className="space-y-4">
                    {[
                      { icon: <GitBranch className="h-5 w-5 text-primary dark:text-blue-400" />, text: "Fork the repository on GitHub" },
                      { icon: <GitPullRequest className="h-5 w-5 text-primary dark:text-green-400" />, text: "Clone your fork locally and create a new branch" },
                      { icon: <GitCommit className="h-5 w-5 text-primary dark:text-yellow-400" />, text: "Make your changes and test them locally" },
                      { icon: <GitMerge className="h-5 w-5 text-primary dark:text-purple-400" />, text: "Submit a pull request with a detailed description" }
                    ].map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1">{step.icon}</div>
                        <span className="text-muted-foreground dark:text-gray-300">{step.text}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground dark:text-gray-100">Looking for Ideas?</h3>
                  <ul className="space-y-4">
                    {[
                      { icon: <Book className="h-5 w-5 text-primary dark:text-blue-400" />, text: "Enhance documentation and learning resources" },
                      { icon: <Code2 className="h-5 w-5 text-primary dark:text-green-400" />, text: "Improve the UI and user experience" },
                      { icon: <Star className="h-5 w-5 text-primary dark:text-yellow-400" />, text: "Suggest new features or topics to cover" },
                      { icon: <Users className="h-5 w-5 text-primary dark:text-purple-400" />, text: "Help with community engagement and support" }
                    ].map((idea, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1">{idea.icon}</div>
                        <span className="text-muted-foreground dark:text-gray-300">{idea.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center border-t border-border dark:border-gray-700 pt-6">
              <Button 
                variant="outline" 
                className="border-border dark:border-gray-700 hover:border-primary/50 dark:hover:border-gray-600"
                asChild
              >
                <Link href="https://github.com/priyanka-deshmukh8/BitOGit/issues" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Open Issues
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}