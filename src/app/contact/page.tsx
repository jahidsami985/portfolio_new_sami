'use client'

import { useState, type ReactNode } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Navbar } from '@/components/navbar'
import {
  CheckCircle2,
  Clock,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react'
import { portfolioProfile } from '@/lib/portfolio-data'

interface ContactInfo {
  icon: ReactNode
  label: string
  value: string
  href?: string
  external?: boolean
}

function FloatingInput({
  id,
  label,
  type = 'text',
  required = false,
}: {
  id: string
  label: string
  type?: string
  required?: boolean
}) {
  return (
    <div className="input-group">
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        placeholder=" "
        className="floating-input"
      />
      <label htmlFor={id} className="floating-label">{label}</label>
    </div>
  )
}

function FloatingTextarea({
  id,
  label,
  required = false,
  rows = 5,
}: {
  id: string
  label: string
  required?: boolean
  rows?: number
}) {
  return (
    <div className="input-group">
      <textarea
        id={id}
        name={id}
        required={required}
        placeholder=" "
        rows={rows}
        className="floating-input"
      />
      <label htmlFor={id} className="floating-label">{label}</label>
    </div>
  )
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Failed to send message')

      setIsSuccess(true)
      e.currentTarget.reset()
    } catch {
      setError('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: portfolioProfile.email,
      href: `mailto:${portfolioProfile.email}`,
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: portfolioProfile.phone,
      href: `tel:${portfolioProfile.phoneHref}`,
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: portfolioProfile.location,
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: 'Response',
      value: 'Within 24 hours',
    },
  ]

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Contact Header */}
            <div className="contact-header text-center mb-8">
              <Badge variant="outline" className="mb-2">Contact</Badge>
              <h1 className="text-3xl sm:text-4xl font-bold mb-3">Let's Get In Touch</h1>
              <p className="text-muted-foreground max-w-md mx-auto">
                Have a Django, API, or web application role to discuss? Send a message.
              </p>
            </div>

            {/* Contact Grid */}
            <div className="contact-grid grid md:grid-cols-5 gap-6">
              {/* Left: Contact Form */}
              <form onSubmit={handleSubmit} className="md:col-span-3 glass-card">
                {isSuccess && (
                  <div className="flex items-center gap-2 p-4 mb-4 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-600">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="font-medium">Message sent successfully!</span>
                  </div>
                )}
                {error && (
                  <div className="p-4 mb-4 rounded-xl bg-red-500/20 border border-red-500/30 text-red-600">
                    {error}
                  </div>
                )}

                <div className="input-row grid sm:grid-cols-2 gap-4">
                  <FloatingInput id="name" label="Name" required />
                  <FloatingInput id="email" label="Email" type="email" required />
                </div>
                <FloatingInput id="subject" label="Subject" required />
                <FloatingTextarea id="message" label="Message" rows={5} required />

                <button type="submit" className="send-btn w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Right: Info & Live Map */}
              <div className="md:col-span-2 space-y-4">
                {/* Contact Info Card */}
                <div className="glass-card">
                  <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
                  <div className="space-y-3">
                    {contactInfo.map((info) => (
                      <ContactInfoRow key={info.label} info={info} />
                    ))}
                  </div>
                </div>

                {/* Live Google Maps */}
                <div className="map-container glass-card">
                  <iframe
                    src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '15px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dhaka, Bangladesh"
                  />
                </div>

                {/* Social Links Card */}
                <div className="glass-card">
                  <h3 className="font-semibold text-lg mb-4">Connect With Me</h3>
                  <div className="social-grid grid grid-cols-2 gap-3">
                    <a
                      href={portfolioProfile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link flex items-center justify-center gap-2 p-3 rounded-xl bg-secondary/30 hover:bg-black hover:text-white transition-all"
                      aria-label="GitHub Profile"
                    >
                      <Github className="w-5 h-5" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={portfolioProfile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link flex items-center justify-center gap-2 p-3 rounded-xl bg-secondary/30 hover:bg-blue-600 hover:text-white transition-all"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* Availability Status Card */}
                <div className="glass-card status-card">
                  <span className="status-dot"></span>
                  <span>{portfolioProfile.availability}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-4 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {portfolioProfile.name}. All rights reserved.</p>
        </div>
      </footer>

      {/* Custom CSS Styles */}
      <style jsx global>{`
        :root {
          --glass-bg: rgba(255, 255, 255, 0.4);
          --glass-border: rgba(255, 255, 255, 0.3);
          --accent: #3b82f6;
        }

        .dark {
          --glass-bg: rgba(0, 0, 0, 0.4);
          --glass-border: rgba(255, 255, 255, 0.1);
        }

        .glass-card {
          background: var(--glass-bg);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--glass-border);
          border-radius: 24px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
          padding: 30px;
          box-sizing: border-box;
          min-width: 0;
        }

        .input-group {
          position: relative;
          margin-bottom: 25px;
          min-width: 0;
        }

        .floating-input {
          width: 100%;
          padding: 15px;
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid transparent;
          border-radius: 12px;
          outline: none;
          transition: 0.3s;
          font-size: 1rem;
          box-sizing: border-box;
        }

        .dark .floating-input {
          background: rgba(0, 0, 0, 0.3);
          color: white;
        }

        .floating-input:focus {
          border-color: var(--accent);
          background: rgba(255, 255, 255, 0.8);
        }

        .dark .floating-input:focus {
          background: rgba(0, 0, 0, 0.5);
        }

        .floating-label {
          position: absolute;
          left: 15px;
          top: 15px;
          color: #666;
          pointer-events: none;
          transition: 0.3s;
          background: transparent;
        }

        .dark .floating-label {
          color: #999;
        }

        .floating-input:focus ~ .floating-label,
        .floating-input:not(:placeholder-shown) ~ .floating-label {
          top: -10px;
          left: 10px;
          font-size: 12px;
          background: white;
          padding: 0 5px;
          border-radius: 4px;
          color: var(--accent);
        }

        .dark .floating-input:focus ~ .floating-label,
        .floating-input:not(:placeholder-shown) ~ .floating-label {
          background: var(--glass-bg);
        }

        .send-btn {
          background: var(--accent);
          color: white;
          padding: 15px;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
        }

        .send-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
        }

        .send-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .map-container {
          padding: 10px;
          height: 250px;
          width: 100%;
          display: flex;
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .map-container:hover {
          transform: scale(1.02);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 25px;
          min-width: 0;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        .status-card {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 500;
          color: #059669;
        }

        .status-dot {
          width: 10px;
          height: 10px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 10px #10b981;
          animation: pulse 2s infinite;
          flex-shrink: 0;
        }

        @keyframes pulse {
          0% { transform: scale(0.95); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.7; }
        }

        .social-link {
          text-decoration: none;
          font-weight: 500;
        }

        .info-item {
          font-size: 0.95rem;
        }
      `}</style>
    </div>
  )
}

function ContactInfoRow({ info }: { info: ContactInfo }) {
  const content = (
    <>
      <div className="text-primary shrink-0">{info.icon}</div>
      <span className="font-medium break-words">{info.value}</span>
    </>
  )

  if (!info.href) {
    return <div className="info-item flex items-center gap-3">{content}</div>
  }

  return (
    <a
      href={info.href}
      target={info.external ? '_blank' : undefined}
      rel={info.external ? 'noopener noreferrer' : undefined}
      className="info-item flex items-center gap-3 hover:text-primary"
      aria-label={info.label}
    >
      {content}
    </a>
  )
}
