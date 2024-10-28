"use client";
import Link from 'next/link';
import { GitBranch } from "lucide-react";

export default function Navbar() {
  return (
    <header className="border-b border-blue-200 bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="text-2xl font-bold flex items-center text-blue-600">
          <GitBranch className="mr-2" />
          Git Learn
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/learn" className="text-blue-600 hover:underline">
                Learn
              </Link>
            </li>
            <li>
              <Link href="/contribute" className="text-blue-600 hover:underline">
                Contribute
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-blue-600 hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/community" className="text-blue-600 hover:underline">
                Community
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}