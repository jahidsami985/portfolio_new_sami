'use client'

import { Badge } from '@/components/ui/badge'
import { Navbar } from '@/components/navbar'
import { portfolioProfile } from '@/lib/portfolio-data'

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <Badge variant="outline" className="mb-2">Blog</Badge>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">Latest Articles</h1>
            <p className="text-muted-foreground">No public articles have been added yet.</p>
          </div>
        </div>
      </main>

      <footer className="py-4 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {portfolioProfile.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
