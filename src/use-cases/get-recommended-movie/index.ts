import { GetRecommendedMovieController } from './get-recommended-movie.controller'
import { GetRecommendedMovieUseCase } from './get-recommended-movie.use-case'
import { MoviesRepository } from '@/repositories/Movie.repository'

const moviesRepository = new MoviesRepository()
const getRecommendedMovieUseCase = new GetRecommendedMovieUseCase(
  moviesRepository,
)
export const getRecommendedMovieController = new GetRecommendedMovieController(
  getRecommendedMovieUseCase,
)
