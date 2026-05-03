'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { Calendar, Clock, ArrowRight, Loader2 } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string | null
  category: string
  date: string
  readTime: string
  image: string | null
  tags: string
  published: boolean
  createdAt: string
}

export default function BlogPage() {
  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'Getting Started with Next.js 14 and TypeScript',
      excerpt: 'Learn how to build modern web applications with Next.js 14 and TypeScript.',
      content: 'Next.js 14 introduces new features and improvements. App Router, Server Components, and more. This tutorial will walk you through setting up a new project and building a simple application.',
      category: 'Tutorial',
      date: '2024-03-10',
      readTime: '5 min',
      image: '/blog-1.png',
      tags: JSON.stringify(['Next.js', 'TypeScript']),
      published: true,
      createdAt: '2024-03-10T00:00:00.000Z'
    },
    {
      id: '2',
      title: 'Building a REST API with Django REST Framework',
      excerpt: 'A step-by-step guide to creating a robust REST API using Django.',
      content: 'Django REST Framework (DRF) is a powerful and flexible toolkit for building Web APIs. It provides a wide range of features, including serialization, authentication, and viewsets. In this article, we’ll explore how to set up DRF and create your first API endpoint.',
      category: 'Backend',
      date: '2024-03-05',
      readTime: '7 min',
      image: '/blog-2.png',
      tags: JSON.stringify(['Python', 'Django']),
      published: true,
      createdAt: '2024-03-05T00:00:00.000Z'
    },
    {
      id: '3',
      title: 'Modern CSS Techniques for Beautiful Web Design',
      excerpt: 'Discover the latest CSS features including Grid, Flexbox, and animations.',
      content: 'CSS has evolved significantly in recent years. Features like CSS Grid and Flexbox have made layout design much easier and more flexible. Additionally, modern CSS animations and transitions allow you to create engaging user experiences without relying on JavaScript.',
      category: 'Design',
      date: '2024-02-28',
      readTime: '6 min',
      image: '/blog-3.png',
      tags: JSON.stringify(['CSS', 'Design']),
      published: true,
      createdAt: '2024-02-28T00:00:00.000Z'
    }
  ]
  const [expandedPost, setExpandedPost] = useState<number | null>(null)

  if (posts.length === 0) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20 pb-8">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <Badge variant="outline" className="mb-2">Blog</Badge>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">Latest Articles</h1>
              <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-6">
              <Badge variant="outline" className="mb-2">Blog</Badge>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">Latest Articles</h1>
              <p className="text-muted-foreground text-sm">
                Thoughts, tutorials, and insights on web development.
              </p>
            </div>

            {/* Featured Post */}
            <Card className="mb-4 overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="aspect-video md:aspect-auto relative overflow-hidden bg-gradient-to-br from-primary/10 to-purple-500/10">
                  <Image
                    src={posts[0].image || '/blog-1.png'}
                    alt={posts[0].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <CardContent className="p-4 flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-2 text-xs">{posts[0].category}</Badge>
                  <h2 className="text-lg font-bold mb-2">{posts[0].title}</h2>
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{posts[0].excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{posts[0].date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{posts[0].readTime}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="w-fit" onClick={() => setExpandedPost(expandedPost === 0 ? null : 0)}>
                      {expandedPost === 0 ? 'Close' : 'Read More'} <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="outline" className="w-fit" asChild>
                      <Link href="/contact">Contact</Link>
                    </Button>
                  </div>
                  {expandedPost === 0 && posts[0].content && (
                    <div className="mt-4 p-3 bg-secondary/30 rounded-lg">
                      <p className="text-sm text-muted-foreground">{posts[0].content}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {JSON.parse(posts[0].tags || '[]').map((tag: string) => (
                          <Badge key={tag} variant="outline" className="text-[10px]">{tag}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </div>
            </Card>

            {/* Blog Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {posts.slice(1).map((post, index) => (
                <Card key={post.id} className="group overflow-hidden hover:shadow-md transition-all">
                  <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-primary/10 to-purple-500/10">
                    <Image
                      src={post.image || '/blog-1.png'}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge variant="secondary" className="text-[10px]">{post.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-3">
                    <h3 className="font-semibold text-sm mb-1 line-clamp-1">{post.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2 line-clamp-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-2.5 w-2.5" />{post.date}
                      </span>
                      <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                        <Clock className="h-2.5 w-2.5" />{post.readTime}
                      </span>
                    </div>
                    {expandedPost === index + 1 && post.content && (
                      <div className="mb-2 p-2 bg-secondary/30 rounded-lg">
                        <p className="text-xs text-muted-foreground line-clamp-3">{post.content}</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {JSON.parse(post.tags || '[]').map((tag: string) => (
                            <Badge key={tag} variant="outline" className="text-[8px] py-0">{tag}</Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-6 text-xs flex-1"
                        onClick={() => setExpandedPost(expandedPost === index + 1 ? null : index + 1)}
                      >
                        {expandedPost === index + 1 ? 'Close' : 'Read'}
                      </Button>
                      <Button variant="ghost" size="sm" className="h-6 text-xs" asChild>
                        <Link href="/contact">Contact</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="py-4 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Jahid Uddin Sami. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
