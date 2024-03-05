import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function seed() {
  const user = await createUser({
    email: 'email@gmail.com',
    password: '123123',
    firstName: 'Nazar',
    lastName: 'Tymiv'
  })

  await updateProfileOfUser({
    userId: user.id,
    firstName: user.profile.firstName,
    lastName: user.profile.lastName,
    phone_number: '0123456789',
    country: 'United Kingdom',
    city: 'London',
    github_url: 'githubLink',
    portfolio_url: 'portfolioUrl',
    profile_picture: 'pic_url',
    cv_url: 'cv of user'
  })

  const job = await createJob({
    userId: user.id,
    title: 'Software Engineer',
    description: 'Creating full stack application',
    background: 'link for background',
    skills: 'js, css, html',
    tags: 'full stack programming',
    location: 'London'
  })

  process.exit(0)
}

const createUser = async ({
  email,
  password,
  role = 'EMPLOYEE',
  firstName,
  lastName
}) => {
  const hashedPassword = await bcrypt.hash(password, 10)

  const createdUser = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      role,
      profile: {
        create: {
          firstName,
          lastName
        }
      }
    },
    include: {
      profile: true
    }
  })

  console.log('Created User: ', createdUser)

  return createdUser
}

const updateProfileOfUser = async ({
  userId,
  firstName,
  lastName,
  phone_number,
  country,
  city,
  github_url,
  portfolio_url,
  profile_picture,
  cv_url
}) => {
  const updatedProfile = await prisma.profile.update({
    where: {
      userId: Number(userId)
    },
    data: {
      firstName,
      lastName,
      phone_number,
      country,
      city,
      github_url,
      portfolio_url,
      profile_picture,
      cv_url
    }
  })

  console.log('Updated profile: ', updatedProfile)

  return updatedProfile
}

const createJob = async ({
  userId,
  title,
  description,
  background,
  skills,
  tags,
  location
}) => {
  const createdJob = await prisma.job.create({
    data: {
      owner: {
        connect: {
          id: Number(userId)
        }
      },
      title,
      description,
      background,
      skills,
      tags,
      location
    }
  })

  console.log('Created Job: ', createdJob)

  return createdJob
}

seed().catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})
