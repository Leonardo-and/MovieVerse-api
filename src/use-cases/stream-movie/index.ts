import { StreamMovieUseCase } from './stream-movie.use-case'
import { StreamMovieController } from './stream-movie.controller'
import { MoviesRepository } from '@/repositories/Movie.repository'

const moviesRepository = new MoviesRepository()
const streamMovieUseCase = new StreamMovieUseCase(moviesRepository)
export const streamMovieController = new StreamMovieController(
  streamMovieUseCase,
)
