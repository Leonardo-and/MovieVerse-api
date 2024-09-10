import { ApiError } from '@/errors/api.error'
import { BadRequest } from '@/errors/bad-request.error'
import prisma from '@/lib/prisma'
import { idGenerator } from '@/utils/id-generator'
import { Movie } from '@prisma/client'
import { IMovieRepository } from './IMovie.repository'
import { subDays } from 'date-fns'

export class MoviesRepository implements IMovieRepository {
  async getAll(genresFilter: string | undefined) {
    try {
      const filter = genresFilter ? { genres: { has: genresFilter } } : {}

      const movies = await prisma.movie.findMany({
        where: filter,
      })

      if (movies.length === 0) {
        throw new BadRequest('No movies found', 404)
      }

      return movies
    } catch (error) {
      if (error instanceof BadRequest) throw error

      throw new ApiError('Error getting movies')
    }
  }

  async create(
    movieData: Omit<Movie, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Movie> {
    try {
      const movieId = idGenerator.handle()

      const movie = await prisma.movie.create({
        data: {
          ...movieData,
          id: movieId,
        },
      })

      return movie
    } catch (error) {
      console.log(error)
      throw new ApiError('Error creating movie')
    }
  }

  async findById(id: string) {
    try {
      const movie = await prisma.movie.findUnique({
        where: { id },
      })

      if (!movie) {
        throw new BadRequest('Movie not found', 404)
      }
      return movie
    } catch (error) {
      if (error instanceof BadRequest) throw error

      throw new ApiError('Error getting movie')
    }
  }

  async findByTitle(title: string): Promise<Movie[]> {
    try {
      const movie = await prisma.movie.findMany({
        where: {
          title: {
            contains: title,
            mode: 'insensitive',
          },
        },
      })

      return movie
    } catch (error) {
      if (error instanceof BadRequest) throw error

      throw new ApiError('Error getting movie')
    }
  }

  async delete(id: string) {
    try {
      await prisma.movie.delete({ where: { id } })
    } catch (error) {
      throw new ApiError('Error deleting movie')
    }
  }

  async getRecommended(): Promise<Movie | null> {
    try {
      const today = new Date()
      const thirtyDaysAgo = subDays(today, 30)

      const newMovies = await prisma.movie.findMany({
        where: {
          createdAt: {
            gte: thirtyDaysAgo,
            lte: new Date(),
          },
        },
      })

      if (!newMovies.length) {
        const randomMovie = await prisma.movie.findMany()

        const randomIndex = Math.floor(Math.random() * randomMovie.length)

        return randomMovie[randomIndex]
      }

      const randomIndex = Math.floor(Math.random() * newMovies.length)
      const randomNewMovie = newMovies[randomIndex]

      return randomNewMovie
    } catch (error) {
      throw new ApiError('Error getting random new movie')
    }
  }

  async getReleases(): Promise<Movie[]> {
    try {
      const today = new Date()
      const thirtyDaysAgo = subDays(today, 30)

      const newMovies = await prisma.movie.findMany({
        where: {
          createdAt: {
            gte: thirtyDaysAgo,
            lte: new Date(),
          },
        },
      })

      return newMovies
    } catch (error) {
      throw new ApiError('Error getting new movies')
    }
  }
}
