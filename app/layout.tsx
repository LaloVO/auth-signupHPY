import "./globals.css"
import { Inter } from "next/font/google"
import Sidebar from "./components/Sidebar"
import Link from "next/link"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Homepty",
  description: "Real estate platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-100">
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-4">
            <nav className="mb-4">
              <Link href="/signup" className="text-blue-600 hover:text-blue-800">
                Sign Up
              </Link>
            </nav>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

