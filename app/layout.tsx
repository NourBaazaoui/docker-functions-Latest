import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Docker Image Manager",
  description: "Manage your Docker images",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">Docker Image Manager</h1>
          </div>
        </nav>
        <main className="bg-gray-100 min-h-screen">{children}</main>
      </body>
    </html>
  )
}



import './globals.css'