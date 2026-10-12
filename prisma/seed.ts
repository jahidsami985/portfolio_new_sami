import { PrismaClient } from '@prisma/client'
import {
  LINK_REQUIRED,
  portfolioProfile,
  portfolioProjects,
  skillCategories,
} from '../src/lib/portfolio-data'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  const profile = await prisma.profile.upsert({
    where: { id: 'default' },
    update: {
      name: portfolioProfile.name,
      title: portfolioProfile.title,
      bio: portfolioProfile.bio,
      email: portfolioProfile.email,
      location: portfolioProfile.location,
      avatar: portfolioProfile.avatar,
      github: portfolioProfile.github,
      linkedin: portfolioProfile.linkedin,
      available: true,
    },
    create: {
      id: 'default',
      name: portfolioProfile.name,
      title: portfolioProfile.title,
      bio: portfolioProfile.bio,
      email: portfolioProfile.email,
      location: portfolioProfile.location,
      avatar: portfolioProfile.avatar,
      github: portfolioProfile.github,
      linkedin: portfolioProfile.linkedin,
      available: true,
    },
  })
  console.log('Created profile:', profile.name)

  await prisma.skill.deleteMany()

  const skills = skillCategories.flatMap((category) =>
    category.skills.map((name, index) => ({
      name,
      category: category.category,
      order: index + 1,
    })),
  )

  for (const skill of skills) {
    await prisma.skill.create({ data: skill })
  }
  console.log('Created', skills.length, 'skills')

  await prisma.project.deleteMany()

  for (const [index, project] of portfolioProjects.entries()) {
    await prisma.project.create({
      data: {
        title: project.title,
        description: project.description,
        tech: JSON.stringify(project.technologies),
        image: project.image,
        githubUrl: project.githubUrl,
        liveUrl: project.liveUrl === LINK_REQUIRED ? LINK_REQUIRED : project.liveUrl,
        featured: true,
        order: index + 1,
      },
    })
  }
  console.log('Created', portfolioProjects.length, 'projects')

  await prisma.blogPost.deleteMany()
  console.log('Created 0 blog posts')

  await prisma.contact.deleteMany()
  console.log('Created 0 sample contact messages')

  console.log('Seeding completed!')
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
