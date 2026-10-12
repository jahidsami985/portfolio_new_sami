'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { Github, ExternalLink } from 'lucide-react'
import {
  LINK_REQUIRED,
  hasUsableLink,
  portfolioProjects,
  type PortfolioProject,
  type ProjectLink,
} from '@/lib/portfolio-data'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-6">
              <Badge variant="outline" className="mb-2">Projects</Badge>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">My Work</h1>
              <p className="text-muted-foreground text-sm max-w-lg mx-auto">
                A selection of my frontend projects, with source code and live websites.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {portfolioProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="py-4 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Jahid Sami. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
      {/* Image */}
      <div className="aspect-video relative overflow-hidden bg-secondary">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
          <ProjectButton link={project.githubUrl} label="Code" icon="github" compact />
          <ProjectButton link={project.liveUrl} label="Live" icon="live" compact />
        </div>
      </div>

      <CardContent className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold mb-2 break-words">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-3">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-[10px] py-0">
              {tech}
            </Badge>
          ))}
        </div>

        <ul className="space-y-1 text-xs text-muted-foreground mb-4">
          {project.features.slice(0, 5).map((feature) => (
            <li key={feature}>- {feature}</li>
          ))}
        </ul>

        <div className="grid grid-cols-2 gap-2 mt-auto">
          <ProjectButton link={project.githubUrl} label="Code" icon="github" />
          <ProjectButton link={project.liveUrl} label="Live" icon="live" />
        </div>
      </CardContent>
    </Card>
  )
}

function ProjectButton({
  link,
  label,
  icon,
  compact = false,
}: {
  link: ProjectLink
  label: string
  icon: 'github' | 'live'
  compact?: boolean
}) {
  const Icon = icon === 'github' ? Github : ExternalLink
  const unavailableLabel = getUnavailableLabel(link, label)
  const className = compact ? 'text-xs' : 'flex-1 text-xs'

  if (hasUsableLink(link)) {
    return (
      <Button variant={compact ? 'secondary' : 'outline'} size="sm" className={className} asChild>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Icon className="h-3.5 w-3.5 mr-1" />
          {label}
        </a>
      </Button>
    )
  }

  return (
    <Button variant={compact ? 'secondary' : 'outline'} size="sm" className={className} disabled>
      <Icon className="h-3.5 w-3.5 mr-1" />
      {unavailableLabel}
    </Button>
  )
}

function getUnavailableLabel(link: ProjectLink, label: string) {
  if (link === LINK_REQUIRED) {
    return 'LINK_REQUIRED'
  }

  return `${label} unavailable`
}
