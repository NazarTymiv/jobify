import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function seed() {
  const user = await createUser({
    email: 'email@gmail.com',
    password: '123123123',
    role: 'EMPLOYER',
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

  await createManyJobs([
    {
      ownerId: Number(user.id),
      title: 'job1',
      description: 'description 1',
      background: 'link for background',
      skills: 'skills for job 1',
      tags: 'tags for job 1',
      location: 'location of job 1'
    },
    {
      ownerId: Number(user.id),
      title: 'job2',
      description: 'description 2',
      background: 'link for background',
      skills: 'skills for job 2',
      tags: 'tags for job 2',
      location: 'location of job 2'
    },
    {
      ownerId: Number(user.id),
      title: 'job3',
      description: 'description 3',
      background: 'link for background',
      skills: 'skills for job 3',
      tags: 'tags for job 3',
      location: 'location of job 3'
    }
  ])

  const user2 = await createUser({
    email: 'email@gmail.com',
    password: '123123123',
    firstName: 'Bob',
    lastName: 'Fil'
  })

  await addJobToSaved({ userId: user2.id, jobId: job.id })

  await addFollower({ followerId: user2.id, followsId: user.id })

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

const createManyJobs = async (jobsDetails) => {
  const createdJobs = await prisma.job.createMany({
    data: jobsDetails
  })

  console.log('Created Many jobs: ', createdJobs)

  return createdJobs
}

const addJobToSaved = async ({ userId, jobId }) => {
  const savedJob = await prisma.savedJob.create({
    data: {
      user: {
        connect: {
          id: Number(userId)
        }
      },
      job: {
        connect: {
          id: Number(jobId)
        }
      }
    },
    include: {
      user: true,
      job: true
    }
  })

  console.log('Saved Job: ', savedJob)

  return savedJob
}

const addFollower = async ({ followerId, followsId }) => {
  const addedFollower = await prisma.follower.create({
    data: {
      followerId: Number(followerId),
      followsId: Number(followsId)
    },
    include: {
      follower: true,
      follows: true
    }
  })

  console.log('Added follower: ', addedFollower)

  return addedFollower
}

seed().catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})
