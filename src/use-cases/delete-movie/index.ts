import { DeleteMovieUseCase } from './delete-movie.use-case'
import { DeleteMovieController } from './delete-movie.controller'
import { MoviesRepository } from '@/repositories/Movie.repository'

const moviesRepository = new MoviesRepository()
const deleteMovieUseCase = new DeleteMovieUseCase(moviesRepository)
export const deleteMovieController = new DeleteMovieController(
  deleteMovieUseCase,
)
