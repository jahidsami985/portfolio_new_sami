'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Navbar } from '@/components/navbar'
import { Code2, Database, Settings, GraduationCap, Award, ExternalLink } from 'lucide-react'

// Devicon mapping
const iconMap: Record<string, string> = {
  'HTML5': 'html5',
  'CSS3': 'css3',
  'JavaScript': 'javascript',
  'React': 'react',
  'Next.js': 'nextjs',
  'Tailwind CSS': 'tailwindcss',
  'Python': 'python',
  'Django': 'django',
  'MySQL': 'mysql'
}

const getDeviconUrl = (name: string): string => {
  const iconName = iconMap[name]
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${iconName}/${iconName}-original.svg`
}

// ✅ REAL SKILLS ONLY
const skillsData = [
  {
    category: 'Frontend',
    icon: Code2,
    skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'React', 'Next.js']
  },
  {
    category: 'Backend',
    icon: Database,
    skills: ['Python', 'Django']
  },
  {
    category: 'Database',
    icon: Database,
    skills: ['MySQL']
  }
]

// ✅ EDUCATION
const educationData = [
  {
    type: 'degree',
    title: 'B.Sc. in Computer Science & Engineering',
    institution: 'United International University (UIU)',
    year: 'Running',
    description: 'Currently pursuing CSE with focus on software development'
  },
  {
    type: 'certificate',
    title: 'Full Stack Web Development (Python, React, Django)',
    issuer: 'Ostad',
    year: '2024',
    link: 'https://www.linkedin.com/in/jahid-uddin-sami-4b52823a1/'
  }
]

// ✅ SOFT SKILLS (keep simple)
const softSkills = [
  'Problem Solving',
  'Communication',
  'Teamwork',
  'Time Management'
]

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
                Technologies I use to build modern web applications.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {skillsData.map((category) => (
                <Card key={category.category} className="hover:shadow-lg transition">
                  <CardContent className="p-4">

                    {/* Category */}
                    <div className="flex items-center gap-2 mb-4">
                      <category.icon className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">{category.category}</h3>
                    </div>

                    {/* Skills */}
                    <div className="grid grid-cols-2 gap-2">
                      {category.skills.map((skill) => (
                        <div key={skill} className="flex items-center gap-2 text-sm">
                          <img
                            src={getDeviconUrl(skill)}
                            alt={skill}
                            className="w-5 h-5"
                          />
                          {skill}
                        </div>
                      ))}
                    </div>

                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Soft Skills */}
            <Card className="mb-8">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Settings className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Soft Skills</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Education</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {educationData.map((edu, i) => (
                  <Card key={i}>
                    <CardContent className="p-5">

                      <div className="flex gap-3">
                        <div>
                          {edu.type === 'degree' ? (
                            <GraduationCap className="text-primary" />
                          ) : (
                            <Award className="text-yellow-500" />
                          )}
                        </div>

                        <div>
                          <h3 className="font-semibold">{edu.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {edu.type === 'degree' ? edu.institution : edu.issuer}
                          </p>
                          <p className="text-sm text-muted-foreground">{edu.year}</p>

                          {edu.description && (
                            <p className="text-sm mt-2">{edu.description}</p>
                          )}

                          {edu.link && (
                            <a
                              href={edu.link}
                              target="_blank"
                              className="inline-flex items-center gap-1 mt-3 text-sm text-blue-600"
                            >
                              View LinkedIn
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                        </div>

                      </div>

                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 border-t text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Jahid Uddin Sami
      </footer>
    </div>
  )
}