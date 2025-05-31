"use client"

import { Button } from "@/components/ui/button";
import { SiDiscord, SiGithub } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { 
  Users, Calendar, MessageSquare, BookOpen, 
  Trophy, Star, GitBranch, GitPullRequest, 
  GitCommit, GitMerge, Award, Zap, 
  Lightbulb, Globe, Heart, Code2 
} from 'lucide-react';

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

export default function CommunityPage() {
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
            <Users className="w-6 h-6 inline-block mr-2 text-primary dark:text-blue-400" />
            <span className="text-sm font-medium text-foreground dark:text-gray-300">Join Our Community</span>
          </div>
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary to-primary/80 dark:from-gray-100 dark:via-blue-400 dark:to-purple-400">
            bit0git Community
          </h1>
          <p className="text-xl text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto">
            Connect with fellow developers, share knowledge, and grow together in our vibrant open-source community.
          </p>
        </motion.section>

        {/* Community Stats */}
        <motion.section 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {[
            { icon: <Users className="h-6 w-6 text-primary dark:text-blue-400" />, label: "Community Members", value: "1000+" },
            { icon: <GitPullRequest className="h-6 w-6 text-primary dark:text-green-400" />, label: "Pull Requests", value: "200+" },
            { icon: <MessageSquare className="h-6 w-6 text-primary dark:text-purple-400" />, label: "Discord Members", value: "500+" },
            { icon: <Star className="h-6 w-6 text-primary dark:text-yellow-400" />, label: "GitHub Stars", value: "100+" }
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

        {/* Community Platforms */}
        <motion.section 
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {[
            {
              icon: <SiDiscord className="h-8 w-8 text-[#5865F2]" />,
              title: "Discord Community",
              description: "Join our Discord server to chat with other developers, get help, and participate in community events.",
              link: "https://discord.gg/68FqnUFfMf",
              buttonText: "Join Discord",
              color: "bg-[#5865F2] hover:bg-[#4752C4]"
            },
            {
              icon: <SiGithub className="h-8 w-8 text-foreground dark:text-gray-300" />,
              title: "GitHub Organization",
              description: "Contribute to our open-source projects, report issues, and collaborate with other developers.",
              link: "https://github.com/priyanka-deshmukh8/BitOGit",
              buttonText: "View on GitHub",
              color: "bg-muted hover:bg-muted/80 dark:bg-gray-700 dark:hover:bg-gray-600"
            },
            {
              icon: <FaTwitter className="h-8 w-8 text-[#1DA1F2]" />,
              title: "Twitter Updates",
              description: "Follow us on Twitter for the latest updates, tips, and community highlights.",
              link: "#",
              buttonText: "Follow on Twitter",
              color: "bg-[#1DA1F2] hover:bg-[#1a8cd8]"
            }
          ].map((platform, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="bg-card dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 border-border dark:border-gray-700 shadow-lg h-full">
                <CardHeader>
                  <div className="mb-4">{platform.icon}</div>
                  <CardTitle className="text-xl font-bold text-foreground dark:text-gray-100">{platform.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground dark:text-gray-400">{platform.description}</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${platform.color} text-primary-foreground dark:text-white`}
                    asChild
                  >
                    <Link href={platform.link} target="_blank" rel="noopener noreferrer">
                      {platform.buttonText}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.section>

        {/* Community Guidelines */}
        <motion.section 
          className="space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl font-bold text-center text-foreground dark:text-gray-100">Community Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeInUp}>
              <Card className="bg-card dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 border-border dark:border-gray-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl font-bold text-foreground dark:text-gray-100">
                    <Heart className="h-5 w-5 text-primary dark:text-red-400" />
                    Code of Conduct
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-primary dark:text-red-400">•</span>
                      Be respectful and inclusive to all members
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary dark:text-red-400">•</span>
                      Use appropriate channels for different topics
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary dark:text-red-400">•</span>
                      Avoid spamming or self-promotion
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary dark:text-red-400">•</span>
                      Encourage constructive feedback and collaboration
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary dark:text-red-400">•</span>
                      Follow Discord&apos;s Community Guidelines
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-card dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 border-border dark:border-gray-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl font-bold text-foreground dark:text-gray-100">
                    <Award className="h-5 w-5 text-primary dark:text-yellow-400" />
                    Community Values
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-primary dark:text-yellow-400">•</span>
                      Foster a supportive learning environment
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary dark:text-yellow-400">•</span>
                      Share knowledge and help others grow
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary dark:text-yellow-400">•</span>
                      Celebrate diversity and different perspectives
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary dark:text-yellow-400">•</span>
                      Maintain professional and constructive discussions
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary dark:text-yellow-400">•</span>
                      Contribute positively to the open-source community
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Community Events */}
        <motion.section 
          className="space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl font-bold text-center text-foreground dark:text-gray-100">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Git Workshop",
                date: "Every Saturday",
                time: "10:00 AM UTC",
                description: "Interactive workshop covering Git fundamentals and advanced topics.",
                icon: <GitBranch className="h-6 w-6 text-primary dark:text-blue-400" />
              },
              {
                title: "Community Meetup",
                date: "First Friday Monthly",
                time: "6:00 PM UTC",
                description: "Virtual meetup for community members to connect and share experiences.",
                icon: <Users className="h-6 w-6 text-primary dark:text-purple-400" />
              },
              {
                title: "Code Review Session",
                date: "Every Wednesday",
                time: "4:00 PM UTC",
                description: "Group code review session for open-source contributions.",
                icon: <GitPullRequest className="h-6 w-6 text-primary dark:text-green-400" />
              },
              {
                title: "Contributor Onboarding",
                date: "Last Sunday Monthly",
                time: "2:00 PM UTC",
                description: "Session for new contributors to learn about our projects and contribution process.",
                icon: <GitCommit className="h-6 w-6 text-primary dark:text-yellow-400" />
              }
            ].map((event, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-card dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 border-border dark:border-gray-700 shadow-lg hover:border-primary/50 dark:hover:border-gray-600 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      {event.icon}
                      <div>
                        <CardTitle className="text-xl font-bold text-foreground dark:text-gray-100">{event.title}</CardTitle>
                        <CardDescription className="text-muted-foreground dark:text-gray-400">
                          {event.date} at {event.time}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground dark:text-gray-300">{event.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full border-border dark:border-gray-700 hover:border-primary/50 dark:hover:border-gray-600">
                      Add to Calendar
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          className="text-center space-y-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <Card className="bg-card dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 border-border dark:border-gray-700 shadow-lg">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 dark:from-blue-400 dark:to-purple-400 mb-4">
                Ready to Join Our Community?
              </h2>
              <p className="text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto mb-8">
                Connect with fellow developers, share your knowledge, and grow together in our supportive community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-[#5865F2] hover:bg-[#4752C4] text-primary-foreground dark:text-white"
                  asChild
                >
                  <Link href="https://discord.gg/68FqnUFfMf" target="_blank" rel="noopener noreferrer">
                    <SiDiscord className="mr-2 h-5 w-5" />
                    Join Discord
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-border dark:border-gray-700 hover:border-primary/50 dark:hover:border-gray-600"
                  asChild
                >
                  <Link href="/contribute">
                    <GitPullRequest className="mr-2 h-5 w-5" />
                    Start Contributing
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}