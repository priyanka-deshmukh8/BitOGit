"use client"

import * as React from "react"
import Link from 'next/link'
import { GitBranch, Menu } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/learn", label: "Learn" },
  { href: "/contribute", label: "Contribute" },
  { href: "/about", label: "About" },
  { href: "/community", label: "Community" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="border-b border-gray-800 bg-gradient-to-r from-gray-900 to-black text-gray-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="text-2xl font-bold flex items-center text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 hover:from-gray-200 hover:to-gray-300 transition-colors">
          <GitBranch className="mr-2 text-gray-400" />
          BitOGit
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className="text-gray-300 font-bold hover:text-gray-100 transition-colors px-3 py-2 rounded-md hover:bg-gray-800"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              className="md:hidden font-bold text-gray-300 hover:text-gray-100"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-900 border-gray-800 text-gray-300">
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 font-bold hover:text-gray-100 transition-colors text-lg block py-2 px-4 rounded-md hover:bg-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

