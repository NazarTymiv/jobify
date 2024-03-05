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
    }
  })

  console.log('Created User: ', createdUser)

  return createUser
}

seed().catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})
