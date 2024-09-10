import { PrismaClient } from '@prisma/client'
import { logger } from '@/lib/pino'

const prisma = new PrismaClient()

async function connect() {
  try {
    await prisma.$connect()
    logger.info('Sucessfully connected to Postgres')
  } catch (error) {
    logger.error(`Error connecting to Postgres: ${error}`)
  } finally {
    await prisma.$disconnect()
  }
}

connect()

export default prisma
