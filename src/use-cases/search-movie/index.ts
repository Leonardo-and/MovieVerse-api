import { MoviesRepository } from '@/repositories/Movie.repository'
import { SearchMovieController } from './search-movie.controller'
import { SearchMovieUseCase } from './search-movie.use-case'

const moviesRepository = new MoviesRepository()
const searchMovieUseCase = new SearchMovieUseCase(moviesRepository)
export const searchMovieController = new SearchMovieController(
  searchMovieUseCase,
)
