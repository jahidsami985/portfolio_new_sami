'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { AntigravityCanvas } from '@/components/antigravity-background'
import { MapPin, Mail, Phone, Calendar, Download, Github, Linkedin } from 'lucide-react'

interface Profile {
  id: string
  name: string
  title: string
  bio: string
  email: string
  phone: string
  location: string
  avatar: string
  github: string
  linkedin: string
  available: boolean
}

export default function AboutPage() {
  const profile: Profile = {
    id: '1',
    name: 'Jahid Uddin Sami',
    title: 'Frontend Developer',
    bio: 'Motivated Frontend Developer with hands-on experience building responsive web applications using React, Tailwind CSS, and JavaScript. Focused on clean UI, performance, and user experience. Currently growing toward full-stack development with Python and Django.',
    
    email: 'engineerjahidsami@gmail.com',
    phone: '+8801752868876',
    location: 'Uttara, Dhaka, Bangladesh',
    
    avatar: '/profile.png',
    github: 'https://github.com/jahidsami985',
    linkedin: 'https://www.linkedin.com/in/jahid-uddin-sami-4b52823a1/',
    
    available: true
  }

  const p = profile

  return (
    <div className="min-h-screen transition-colors duration-500">
      
      {/* Background */}
      <AntigravityCanvas 
        particleCount={70} 
        mouseRadius={180}
        minSize={1.5}
        maxSize={4}
      />
      
      <div className="relative z-10">
        <Navbar />
        
        <main className="pt-28 pb-20 container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* PROFILE IMAGE */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              className="md:col-span-5 lg:col-span-4"
            >
              <div className="relative group overflow-hidden rounded-[2.5rem] border-4 border-white dark:border-slate-800 shadow-2xl aspect-square">
                <img 
                  src={p.avatar} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={p.name} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <p className="text-white text-sm italic">
                    "Focused on building clean, user-friendly web experiences."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CONTENT */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.2 }}
              className="md:col-span-7 lg:col-span-8 space-y-6"
            >
              <div className="p-8 rounded-[2.5rem] bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/20 shadow-xl">
                
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <Badge className="bg-green-500/10 text-green-600 border-none mb-4 px-4 py-1">
                      Open to Opportunities
                    </Badge>
                    <h1 className="text-4xl font-extrabold mb-2">{p.name}</h1>
                    <p className="text-xl text-primary font-semibold">{p.title}</p>
                  </div>

                  <Button 
                    asChild 
                    className="rounded-full px-8 bg-yellow-400 hover:bg-yellow-500 text-black font-bold"
                  >
                    <a href={`mailto:${p.email}`}>Hire Me</a>
                  </Button>
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                  {p.bio}
                </p>

                {/* INFO GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <ContactInfoItem 
                    icon={<Mail size={18}/>} 
                    label="EMAIL" 
                    value={p.email} 
                    link={`mailto:${p.email}`} 
                  />

                  <ContactInfoItem 
                    icon={<Phone size={18}/>} 
                    label="PHONE" 
                    value={p.phone} 
                    link={`tel:${p.phone}`} 
                  />

                  <ContactInfoItem 
                    icon={<MapPin size={18}/>} 
                    label="LOCATION" 
                    value={p.location} 
                  />

                  <ContactInfoItem 
                    icon={<Calendar size={18}/>} 
                    label="STATUS" 
                    value="Open to Internship / Junior Roles" 
                  />
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex gap-4">
                
                <Button asChild variant="secondary" className="rounded-2xl h-14 px-6 flex-1 flex gap-2">
                  <a href="/resume.pdf" download>
                    <Download size={20} /> Resume
                  </a>
                </Button>

                <Button variant="outline" className="rounded-2xl h-14 aspect-square p-0" asChild>
                  <a href={p.github} target="_blank">
                    <Github size={24}/>
                  </a>
                </Button>

                <Button variant="outline" className="rounded-2xl h-14 aspect-square p-0" asChild>
                  <a href={p.linkedin} target="_blank">
                    <Linkedin size={24}/>
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* MAP */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-12 rounded-[2.5rem] overflow-hidden border h-64"
          >
            <iframe 
              src="https://www.google.com/maps?q=Uttara,Dhaka&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy"
            ></iframe>
          </motion.div>
        </main>

        {/* FOOTER */}
        <footer className="py-4 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Jahid Uddin Sami
        </footer>
      </div>
    </div>
  )
}

function ContactInfoItem({ icon, label, value, link }: any) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-100/50 dark:bg-white/5 border">
      <div className="p-2 bg-white dark:bg-slate-800 rounded-xl text-primary">{icon}</div>
      <div>
        <p className="text-xs text-muted-foreground uppercase font-bold">{label}</p>
        {link ? (
          <a href={link} className="text-sm font-medium hover:text-primary">
            {value}
          </a>
        ) : (
          <p className="text-sm font-medium">{value}</p>
        )}
      </div>
    </div>
  )
}