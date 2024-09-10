import { logger } from '../src/lib/pino'
import prisma from '../src/lib/prisma'

async function seed() {
  await prisma.movie.create({
    data: {
      id: '',
      title: '',
      overview: '',
      posterFilename: '',
      videoFilename: '',
      genres: [],
      duration: 0,
      releaseDate: new Date(),
      backgroundFilename: '',
      logoFilename: '',
      cast: [],
    },
  })
}

seed().then(() => {
  logger.info('Database seeded successfully')
  prisma.$disconnect()
})
