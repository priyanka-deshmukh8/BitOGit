"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Users, Github } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-300">
      <header className="container mx-auto px-4 py-6">
        {/* <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">BitOGit</Link>
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

      <main className="container mx-auto px-4 py-8 space-y-12">
        <motion.h2 
          className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About BitOGit
        </motion.h2>

        <motion.section 
          className="space-y-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
            <CardContent className="pt-6">
              <p className="text-lg text-gray-300">
                BitOGit is an open-source initiative dedicated to making version control accessible to everyone. We believe that understanding Git is essential for modern development, and our mission is to provide high-quality learning resources to make this happen.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section 
          className="space-y-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-100">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">To empower developers with practical Git knowledge and encourage collaboration in open-source development.</p>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section 
          className="space-y-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl font-bold text-gray-100">
                <Users className="h-6 w-6" />
                The Team
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">This project is maintained by passionate open-source contributors from all over the world. Join us on GitHub to become a part of our community!</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-gray-100">
                <Link href="https://github.com/BitOGit" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> Join us on GitHub
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.section>
      </main>

      <footer className="border-t border-gray-800 mt-12 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500">© {new Date().getFullYear()} BitOGit. All rights reserved.</p>
            <nav className="flex gap-4">
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

