import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seed() {
  process.exit(0)
}

seed().catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})
