'use client'

import { useState, type ReactNode } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Navbar } from '@/components/navbar'
import { AntigravityCanvas } from '@/components/antigravity-background'
import {
  ArrowRight,
  Github,
  ExternalLink,
  Linkedin,
  Mail,
  Copy,
  Check,
  Rocket,
  Users,
  Zap,
  Target,
} from 'lucide-react'
import {
  experienceItems,
  featuredSkillBadges,
  heroStats,
  hasUsableLink,
  portfolioProfile,
  portfolioProjects,
  skillCategories,
} from '@/lib/portfolio-data'

const statIcons = [Rocket, Users, Zap, Target]

export default function Home() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioProfile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen">
      <AntigravityCanvas particleCount={60} />

      <div className="relative z-10">
        <Navbar />

        <main className="pt-28 pb-20 container mx-auto px-4 space-y-20">
          {/* HERO */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* LEFT */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <Badge className="mb-4">{portfolioProfile.title}</Badge>

              <h1 className="text-5xl font-black mb-4">
                Building Responsive Web Experiences
              </h1>

              <p className="text-muted-foreground mb-6">
                I'm <b>{portfolioProfile.name}</b>. {portfolioProfile.intro}
              </p>

              {/* STATS */}
              <div className="flex flex-wrap gap-6 mb-6">
                {heroStats.map((stat, index) => {
                  const Icon = statIcons[index] ?? Target
                  return (
                    <div key={stat.label} className="min-w-24">
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-primary" />
                        <p className="font-bold text-xl">{stat.value}</p>
                      </div>
                      <p className="text-xs">{stat.label}</p>
                    </div>
                  )
                })}
              </div>

              <div className="flex gap-4 mb-4">
                <Button asChild>
                  <Link href="/projects">
                    Projects <ArrowRight />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/about">About</Link>
                </Button>
              </div>

              {/* SOCIAL */}
              <div className="flex gap-3">
                <Social icon={<Github />} link={portfolioProfile.github} label="GitHub profile" />
                <Social icon={<Linkedin />} link={portfolioProfile.linkedin} label="LinkedIn profile" />
                <Social icon={<Mail />} link={`mailto:${portfolioProfile.email}`} label="Email Jahid" />
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  <img
                    src={portfolioProfile.avatar}
                    className="w-40 h-40 mx-auto rounded-xl object-cover"
                    alt={portfolioProfile.name}
                  />
                  <h2 className="text-2xl font-bold">{portfolioProfile.alternateTitle}</h2>
                  <p className="text-muted-foreground">{portfolioProfile.location}</p>

                  <div className="flex flex-wrap justify-center gap-2">
                    {featuredSkillBadges.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 justify-center pt-2">
                    <Button asChild>
                      <a href={`mailto:${portfolioProfile.email}`}>Hire Me</a>
                    </Button>

                    <button
                      onClick={copyEmail}
                      className="p-3 border rounded"
                      aria-label="Copy email address"
                    >
                      {copied ? <Check size={18} /> : <Copy size={18} />}
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* SKILLS */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>

            <div>
              {skillCategories.map((category) => (
                <Card key={category.category}>
                  <CardContent className="p-5">
                    <h3 className="font-bold mb-3 text-primary">{category.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill}>{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* EXPERIENCE */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>

            <div className="space-y-6">
              {experienceItems.map((item) => (
                <Card key={`${item.company}-${item.title}`}>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl">{item.title}</h3>
                    <p className="text-muted-foreground">
                      {item.company} ({item.dates})
                    </p>

                    {item.responsibilities.length > 0 && (
                      <div className="mt-3 space-y-2 text-sm">
                        {item.responsibilities.map((responsibility) => (
                          <p key={responsibility}>- {responsibility}</p>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* PROJECTS */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {portfolioProjects.map((project) => (
                <Card key={project.id}>
                  <CardContent className="p-5 space-y-3">
                    <div>
                      <h3 className="font-bold mb-2 break-words">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-1 text-sm">
                      {project.features.slice(0, 3).map((feature) => (
                        <p key={feature}>- {feature}</p>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {hasUsableLink(project.githubUrl) && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" /> GitHub
                          </a>
                        </Button>
                      )}
                      {hasUsableLink(project.liveUrl) && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" /> Live Website
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-3">Let's Work Together</h2>
            <p className="text-muted-foreground mb-4">{portfolioProfile.availability}.</p>
            <Button asChild>
              <a href={`mailto:${portfolioProfile.email}`}>Contact Me</a>
            </Button>
          </div>
        </main>
      </div>
    </div>
  )
}

function Social({ icon, link, label }: { icon: ReactNode; link: string; label: string }) {
  const isEmail = link.startsWith('mailto:')

  return (
    <a
      href={link}
      target={isEmail ? undefined : '_blank'}
      rel={isEmail ? undefined : 'noopener noreferrer'}
      aria-label={label}
      className="p-2 border rounded hover:bg-primary hover:text-white"
    >
      {icon}
    </a>
  )
}
