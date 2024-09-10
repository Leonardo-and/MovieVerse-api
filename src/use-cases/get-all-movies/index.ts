import { GetAllMoviesUseCase } from './get-all-movies.use-case'
import { GetAllMoviesController } from './get-all-movies.controller'
import { MoviesRepository } from '@/repositories/Movie.repository'

const moviesRepository = new MoviesRepository()

const getAllMoviesUseCase = new GetAllMoviesUseCase(moviesRepository)

export const getAllMoviesController = new GetAllMoviesController(
  getAllMoviesUseCase,
)
