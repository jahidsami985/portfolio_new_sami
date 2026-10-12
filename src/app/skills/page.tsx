'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Navbar } from '@/components/navbar'
import {
  Award,
  Code2,
  GraduationCap,
  Languages,
  type LucideIcon,
} from 'lucide-react'
import {
  certificationItems,
  educationItems,
  languageItems,
  skillCategories,
} from '@/lib/portfolio-data'

const categoryIcons: Record<string, LucideIcon> = {
  'Technical Skills': Code2,
}

const skillIconMap: Record<string, string> = {
  TypeScript: 'typescript',
  'Next.js': 'nextjs',
  'Node.js': 'nodejs',
  Python: 'python',
  JavaScript: 'javascript',
  C: 'c',
  Django: 'django',
  MySQL: 'mysql',
  SQLite: 'sqlite',
  HTML: 'html5',
  CSS: 'css3',
  React: 'react',
  'Tailwind CSS': 'tailwindcss',
  'Chart.js': 'chartjs',
  Git: 'git',
  GitHub: 'github',
  'VS Code': 'vscode',
}

const getDeviconUrl = (name: string): string | null => {
  const iconName = skillIconMap[name]
  if (!iconName) return null

  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${iconName}/${iconName}-original.svg`
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-2">Skills</Badge>
              <h1 className="text-3xl sm:text-4xl font-bold mb-3">My Skills</h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Technologies I use to build responsive websites and web applications.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="mb-8">
              {skillCategories.map((category) => {
                const Icon = categoryIcons[category.category] ?? Code2

                return (
                  <Card key={category.category} className="hover:shadow-lg transition">
                    <CardContent className="p-4">
                      {/* Category */}
                      <div className="flex items-center gap-2 mb-4">
                        <Icon className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold">{category.category}</h3>
                      </div>

                      {/* Skills */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {category.skills.map((skill) => (
                          <div key={skill} className="flex items-center gap-2 text-sm">
                            <SkillIcon skill={skill} />
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Education */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Education</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {educationItems.map((edu) => (
                  <Card key={edu.title}>
                    <CardContent className="p-5">
                      <div className="flex gap-3">
                        <GraduationCap className="text-primary shrink-0" />
                        <div>
                          <h3 className="font-semibold">{edu.title}</h3>
                          <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {certificationItems.map((certification) => (
                  <Card key={certification.title}>
                    <CardContent className="p-5">
                      <div className="flex gap-3">
                        <Award className="text-yellow-500 shrink-0" />
                        <div>
                          <h3 className="font-semibold">{certification.title}</h3>
                          <p className="text-sm text-muted-foreground">{certification.issuer}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Languages */}
            <Card className="mb-8">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Languages className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Languages</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {languageItems.map((language) => (
                    <Badge key={language}>{language}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 border-t text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Jahid Sami
      </footer>
    </div>
  )
}

function SkillIcon({ skill }: { skill: string }) {
  const iconUrl = getDeviconUrl(skill)

  if (!iconUrl) {
    return (
      <span className="w-5 h-5 rounded bg-secondary flex items-center justify-center shrink-0">
        <Code2 className="w-3 h-3 text-muted-foreground" />
      </span>
    )
  }

  return <img src={iconUrl} alt="" className="w-5 h-5 shrink-0" />
}
