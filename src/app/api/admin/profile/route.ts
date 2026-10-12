import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { portfolioProfile } from '@/lib/portfolio-data'

const defaultProfileData = {
  name: portfolioProfile.name,
  title: portfolioProfile.title,
  bio: portfolioProfile.bio,
  email: portfolioProfile.email,
  location: portfolioProfile.location,
  avatar: portfolioProfile.avatar,
  github: portfolioProfile.github,
  linkedin: portfolioProfile.linkedin,
  available: true,
}

export async function GET() {
  try {
    let profile = await db.profile.findFirst()
    
    // If no profile exists, create a default one
    if (!profile) {
      profile = await db.profile.create({
        data: defaultProfileData,
      })
    }
    
    return NextResponse.json(profile)
  } catch (error) {
    console.error('Error fetching profile:', error)
    return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const { name, title, bio, email, location, avatar, github, linkedin, available } = body

    let profile = await db.profile.findFirst()

    if (profile) {
      profile = await db.profile.update({
        where: { id: profile.id },
        data: {
          name: name || profile.name,
          title: title || profile.title,
          bio: bio || profile.bio,
          email: email || profile.email,
          location: location || profile.location,
          avatar: avatar !== undefined ? avatar : profile.avatar,
          github: github !== undefined ? github : profile.github,
          linkedin: linkedin !== undefined ? linkedin : profile.linkedin,
          available: available !== undefined ? available : profile.available,
        },
      })
    } else {
      profile = await db.profile.create({
        data: {
          name: name || defaultProfileData.name,
          title: title || defaultProfileData.title,
          bio: bio || defaultProfileData.bio,
          email: email || defaultProfileData.email,
          location: location || defaultProfileData.location,
          avatar: avatar || defaultProfileData.avatar,
          github: github || defaultProfileData.github,
          linkedin: linkedin || defaultProfileData.linkedin,
          available: available ?? defaultProfileData.available,
        },
      })
    }

    return NextResponse.json(profile)
  } catch (error) {
    console.error('Error updating profile:', error)
    return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 })
  }
}
