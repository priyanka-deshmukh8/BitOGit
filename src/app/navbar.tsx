"use client"

import * as React from "react"
import Link from 'next/link'
import { GitBranch, Menu, Search, Github } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/ThemeToggle"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/learn", label: "Learn" },
  { href: "/contribute", label: "Contribute" },
  { href: "/about", label: "About" },
  { href: "/community", label: "Community" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gradient-to-r from-gray-900 to-black text-gray-300 backdrop-blur supports-[backdrop-filter]:bg-gray-900/75 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-2xl font-bold flex items-center text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 hover:from-gray-200 hover:to-gray-300 transition-all duration-300 hover:scale-105"
        >
          <GitBranch className="mr-2 text-gray-400" />
          bit0git
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className={`relative px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                    pathname === item.href 
                      ? 'text-gray-100 bg-gray-800/50' 
                      : 'text-gray-300 hover:text-gray-100 hover:bg-gray-800/30'
                  }`}
                >
                  {item.label}
                  {pathname === item.href && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-gray-100 hover:bg-gray-800/30 transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-gray-100 hover:bg-gray-800/30 transition-colors"
              asChild
            >
              <a 
                href="https://github.com/priyanka-deshmukh8/BitOGit" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </nav>

        <div className="flex items-center space-x-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-300 hover:text-gray-100 hover:bg-gray-800/30 transition-colors"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-gray-300 hover:text-gray-100 hover:bg-gray-800/30 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[300px] sm:w-[400px] bg-gray-900/95 border-gray-800 text-gray-300 backdrop-blur"
            >
              <nav className="flex flex-col space-y-2 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-3 rounded-md font-medium transition-all duration-200 ${
                      pathname === item.href 
                        ? 'text-gray-100 bg-gray-800/50' 
                        : 'text-gray-300 hover:text-gray-100 hover:bg-gray-800/30'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 mt-4 border-t border-gray-800">
                  <a
                    href="https://github.com/priyanka-deshmukh8/BitOGit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-3 text-gray-300 hover:text-gray-100 hover:bg-gray-800/30 rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Github className="h-5 w-5 mr-2" />
                    GitHub Repository
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
} 