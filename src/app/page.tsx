'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Navbar } from '@/components/navbar'
import { AntigravityCanvas } from '@/components/antigravity-background'
import { 
  ArrowRight, Github, Linkedin, Mail, Copy, Check,
  Code2, Database, Rocket, Users, Zap, Target
} from 'lucide-react'

interface Profile {
  name: string
  title: string
  bio: string
  email: string
  location: string
  avatar: string
  github: string
  linkedin: string
}

export default function Home() {

  const profile: Profile = {
    name: 'Jahid Uddin Sami',
    title: 'Frontend Developer',
    bio: 'Motivated Frontend Developer with experience building responsive web applications using React, Tailwind CSS, and JavaScript. Passionate about clean UI and user experience. Currently learning backend with Python and Django.',
    email: 'engineerjahidsami@gmail.com',
    location: 'Uttara, Dhaka, Bangladesh',
    avatar: '/profile.png',
    github: 'https://github.com/jahidsami985',
    linkedin: 'https://www.linkedin.com/in/jahid-uddin-sami-4b52823a1/'
  }

  const stats = [
    { icon: Rocket, label: 'Projects Built', value: '5+' },
    { icon: Users, label: 'Team Experience', value: '2+ Years' },
    { icon: Zap, label: 'Focus', value: 'Frontend Dev' },
    { icon: Target, label: 'Goal', value: 'Full Stack' },
  ]

  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email)
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
            <motion.div initial={{opacity:0,x:-30}} animate={{opacity:1,x:0}}>
              
              <Badge className="mb-4">Frontend Developer</Badge>

              <h1 className="text-5xl font-black mb-4">
                Building Clean & Modern Web Experiences
              </h1>

              <p className="text-muted-foreground mb-6">
                I'm <b>{profile.name}</b>, a Frontend Developer focused on building responsive,
                user-friendly web applications using modern technologies.
              </p>

              {/* STATS */}
              <div className="flex gap-6 mb-6">
                {stats.slice(0,3).map((s,i)=>(
                  <div key={i}>
                    <p className="font-bold text-xl">{s.value}</p>
                    <p className="text-xs">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mb-4">
                <Button asChild>
                  <Link href="/projects">Projects <ArrowRight/></Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/about">About</Link>
                </Button>
              </div>

              {/* SOCIAL */}
              <div className="flex gap-3">
                <Social icon={<Github/>} link={profile.github}/>
                <Social icon={<Linkedin/>} link={profile.linkedin}/>
                <Social icon={<Mail/>} link={`mailto:${profile.email}`}/>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}}>
              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  <img src={profile.avatar} className="w-40 h-40 mx-auto rounded-xl"/>
                  <h2 className="text-2xl font-bold">{profile.title}</h2>
                  <p className="text-muted-foreground">{profile.location}</p>

                  <div className="flex flex-wrap justify-center gap-2">
                    {['HTML','CSS','JavaScript','React','Next.js','Tailwind'].map(s=>(
                      <Badge key={s}>{s}</Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 justify-center pt-2">
                    <Button asChild>
                      <a href={`mailto:${profile.email}`}>Hire Me</a>
                    </Button>

                    <button onClick={copyEmail} className="p-3 border rounded">
                      {copied ? <Check size={18}/> : <Copy size={18}/>}
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

          </div>

          {/* SKILLS */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>

            <div className="grid md:grid-cols-2 gap-6">

              <Card><CardContent className="p-5">
                <h3 className="font-bold mb-3 text-blue-500">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {['HTML','CSS','Tailwind CSS','JavaScript','React','Next.js'].map(s=>(
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
              </CardContent></Card>

              <Card><CardContent className="p-5">
                <h3 className="font-bold mb-3 text-green-500">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python','Django'].map(s=>(
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
              </CardContent></Card>

            </div>
          </div>

          {/* EXPERIENCE */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl">Junior Web Developer</h3>
                <p className="text-muted-foreground">Amar Fuel (2022 – 2024)</p>

                <div className="mt-3 space-y-2 text-sm">
                  <p>• Built and maintained web applications</p>
                  <p>• Worked with frontend development team</p>
                  <p>• Fixed bugs and improved performance</p>
                  <p>• Updated features based on requirements</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* PROJECTS */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>

            <div className="grid md:grid-cols-2 gap-6">

              <Card><CardContent className="p-5">
                <h3 className="font-bold mb-2">Payoo App</h3>
                <p className="text-sm text-muted-foreground">
                  bKash-like payment UI built with HTML, Tailwind CSS, JavaScript.
                </p>
              </CardContent></Card>

              <Card><CardContent className="p-5">
                <h3 className="font-bold mb-2">Sami Tea Stall</h3>
                <p className="text-sm text-muted-foreground">
                  E-commerce app using React, Express.js, SQLite.
                </p>
              </CardContent></Card>

            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-3">Let's Work Together</h2>
            <p className="text-muted-foreground mb-4">
              Open to internships and junior frontend roles.
            </p>
            <Button asChild>
              <a href={`mailto:${profile.email}`}>Contact Me</a>
            </Button>
          </div>

        </main>
      </div>
    </div>
  )
}

/* SOCIAL BUTTON */
function Social({icon,link}:{icon:any,link:string}) {
  return (
    <a href={link} target="_blank" className="p-2 border rounded hover:bg-primary hover:text-white">
      {icon}
    </a>
  )
}