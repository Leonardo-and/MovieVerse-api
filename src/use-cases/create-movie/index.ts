import { CreateMovieController } from './create-movie.controller'
import { CreateMovieUseCase } from './create-movie.use-case'
import { MoviesRepository } from '@/repositories/Movie.repository'

const movieRepository = new MoviesRepository()

const createMovieUseCase = new CreateMovieUseCase(movieRepository)

export const createMovieController = new CreateMovieController(
  createMovieUseCase,
)
