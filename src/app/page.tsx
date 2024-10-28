"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GitBranch, BookOpen, Users, Github } from "lucide-react"
import { useEffect } from "react"
import Link from 'next/link'

export default function LandingPage() {
  useEffect(() => {
    // Add Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Roboto+Mono&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Add custom styles
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fadeInUp { animation: fadeInUp 0.6s ease-out; }
      .hover-lift { transition: transform 0.3s ease; }
      .hover-lift:hover { transform: translateY(-5px); }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-['Poppins',sans-serif]">
      <header className="border-b border-blue-200 animate-fadeInUp">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center text-blue-600">
            <GitBranch className="mr-2" />
            Git Learn
          </h1>
          <nav>
          <ul className="flex space-x-4">
              <li><Link href="/learn" className="text-blue-600 hover:underline">Learn</Link></li>
              <li><Link href="/contribute" className="text-blue-600 hover:underline">Contribute</Link></li>
              <li><Link href="/about" className="text-blue-600 hover:underline">About</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          <h2 className="text-4xl font-bold mb-4 text-blue-800">Learn Git & Contribute to Open Source</h2>
          <p className="text-xl mb-6 text-black">Master version control and make your mark in the open source community</p>
          <div className="flex justify-center space-x-4">
          <Link href="https://github.com/priyanka-deshmukh8/gitlearn">
          <Button className="bg-blue-600 text-white hover:bg-blue-700 hover-lift">Start Learning</Button>
            </Link>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 hover-lift">How to Contribute</Button>
          </div>
        </section>

        <section id="learn" className="mb-12 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
          <h3 className="text-2xl font-bold mb-4 text-blue-800">Learning Resources</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-blue-200 hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <BookOpen className="mr-2" />
                  Git Basics
                </CardTitle>
                <CardDescription className="text-black">Learn the fundamentals of Git</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-black font-['Roboto_Mono',monospace]">
                  <li>Introduction to version control</li>
                  <li>Setting up Git</li>
                  <li>Basic Git commands</li>
                  <li>Branching and merging</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-blue-200 hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <Users className="mr-2" />
                  Collaborative Workflows
                </CardTitle>
                <CardDescription className="text-black">Master working with others using Git</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-black font-['Roboto_Mono',monospace]">
                  <li>Pull requests</li>
                  <li>Code reviews</li>
                  <li>Resolving conflicts</li>
                  <li>Best practices for collaboration</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contribute" className="mb-12 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
          <h3 className="text-2xl font-bold mb-4 text-blue-800">How to Contribute</h3>
          <Card className="border-blue-200 hover-lift">
            <CardContent className="prose max-w-none text-black">
              <ol className="list-decimal list-inside font-['Roboto_Mono',monospace]">
                <li>Fork the repository on GitHub</li>
                <li>Clone your fork locally</li>
                <li>Create a new branch for your contribution</li>
                <li>Make your changes and commit them</li>
                <li>Push your changes to your fork</li>
                <li>Open a pull request to the main repository</li>
              </ol>
              <p className="mt-4">
                Remember to read our contribution guidelines before submitting your pull request!
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="about" className="mb-12 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
          <h3 className="text-2xl font-bold mb-4 text-blue-800">About Git Learn</h3>
          <p className="mb-4 text-black">
            Git Learn is an open-source project dedicated to helping developers learn Git and contribute to open source projects. 
            Our mission is to make version control and collaborative development accessible to everyone.
          </p>
          <Link href="https://github.com/priyanka-deshmukh8/gitlearn">
  <Button variant="outline" className="flex items-center border-blue-600 text-blue-600 hover:bg-blue-50 hover-lift">
    <Github className="mr-2" />
    View on GitHub
  </Button>
</Link>
        </section>
      </main>

      <footer className="border-t border-blue-200 animate-fadeInUp" style={{animationDelay: '1s'}}>
        <div className="container mx-auto px-4 py-6">
        <p className="text-center text-sm text-black">
  © 2023 Git Learn. All rights reserved. | 
  <a href="https://github.com/priyanka-deshmukh8/gitlearn" className="text-blue-600 hover:underline ml-1">GitHub Repository</a> | 
  <a href="#" className="text-blue-600 hover:underline ml-1">Privacy Policy</a> | 
  <a href="#" className="text-blue-600 hover:underline ml-1">Terms of Service</a>
</p>
        </div>
      </footer>
    </div>
  )
}