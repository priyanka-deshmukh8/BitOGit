import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProgressProvider } from "@/context/ProgressContext";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/app/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "bit0git - Master Git and Open Source",
  description: "Learn Git, contribute to open source, and grow your development skills with interactive tutorials and real-world projects.",
  keywords: ["Git", "Open Source", "Learning", "Development", "Version Control", "Programming", "Web Development", "Software Engineering"],
  authors: [{ name: "bit0git Team" }],
  openGraph: {
    title: "bit0git - Master Git and Open Source",
    description: "Learn Git, contribute to open source, and grow your development skills with interactive tutorials and real-world projects.",
    type: "website",
    locale: "en_US",
    siteName: "bit0git",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "bit0git - Master Git and Open Source",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "bit0git - Master Git and Open Source",
    description: "Learn Git, contribute to open source, and grow your development skills with interactive tutorials and real-world projects.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ProgressProvider>
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 dark:from-gray-900 dark:via-black dark:to-gray-800">
              <Navbar />
              <main className="flex-1">{children}</main>
              <footer className="border-t border-gray-800 mt-12 bg-gradient-to-b from-gray-900 to-black dark:from-gray-900 dark:to-black">
                <div className="container mx-auto px-4 py-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                      <h3 className="text-xl font-bold text-gray-100 mb-4">bit0git</h3>
                      <p className="text-gray-400 mb-4">
                        Empowering developers to master Git and contribute to open source through interactive learning and real-world projects.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-100 mb-4">Quick Links</h4>
                      <nav className="flex flex-col space-y-2">
                        <a href="/learn" className="text-gray-400 hover:text-gray-300">Learn</a>
                        <a href="/contribute" className="text-gray-400 hover:text-gray-300">Contribute</a>
                        <a href="/community" className="text-gray-400 hover:text-gray-300">Community</a>
                        <a href="/about" className="text-gray-400 hover:text-gray-300">About</a>
                      </nav>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-100 mb-4">Legal</h4>
                      <nav className="flex flex-col space-y-2">
                        <a href="/privacy" className="text-gray-400 hover:text-gray-300">Privacy Policy</a>
                        <a href="/terms" className="text-gray-400 hover:text-gray-300">Terms of Service</a>
                        <a href="/contact" className="text-gray-400 hover:text-gray-300">Contact Us</a>
                      </nav>
                    </div>
                  </div>
                  <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500">© {new Date().getFullYear()} bit0git. All rights reserved.</p>
                    <div className="flex items-center space-x-4">
                      <a href="https://github.com/priyanka-deshmukh8/BitOGit" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-300">
                        GitHub
                      </a>
                      <a href="https://discord.gg/bit0git" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-300"> 
                        Discord
                      </a>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </ProgressProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}