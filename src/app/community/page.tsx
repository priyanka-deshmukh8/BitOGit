"use client"

import { Button } from "@/components/ui/button";
import { SiDiscord } from "react-icons/si";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <motion.h2 
          className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Join our Open Source Community
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg mb-8">
            <CardContent className="pt-6">
              <p className="text-center mb-6 text-xl text-gray-300">
                Connect with fellow learners, ask questions, and collaborate on open-source projects. Our Discord community is open to everyone interested in mastering Git and contributing to our various open source projects.
              </p>
              <p className="text-center mb-8 text-gray-300">
                Whether you're a beginner or an experienced developer, we welcome you to join our community and help each other grow!
              </p>

              <div className="flex justify-center">
                <Button 
                  className="bg-[#5865F2] hover:bg-[#4752C4] text-white flex items-center space-x-2"
                  asChild
                >
                  <Link href="https://discord.gg/68FqnUFfMf" target="_blank" rel="noopener noreferrer">
                    <SiDiscord className="mr-2 h-5 w-5" />
                    <span>Join Our Discord Community</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.section 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 mb-6">Community Guidelines</h3>
          <Card className="bg-gradient-to-br from-gray-800 to-gray-800 border-gray-700 shadow-lg">
            <CardContent className="pt-6">
              <ul className="list-disc list-inside text-lg space-y-4  text-gray-300">
                <li>Be respectful and inclusive to all members</li>
                <li>Use appropriate channels for different topics</li>
                <li>Avoid spamming or self-promotion</li>
                <li>Encourage constructive feedback and collaboration</li>
                <li>Follow the server rules and Discord&apos;s Community Guidelines</li>
              </ul>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
        </motion.section>
      </div>
    </div>
  );
}