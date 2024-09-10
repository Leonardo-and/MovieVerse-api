import { GetMovieReleasesController } from './get-movie.releases.controller'
import { GetMovieReleasesUseCase } from './get-movie-releases.use-case'
import { MoviesRepository } from '@/repositories/Movie.repository'

const moviesRepository = new MoviesRepository()
const getMovieReleasesUseCase = new GetMovieReleasesUseCase(moviesRepository)
export const getMovieReleasesController = new GetMovieReleasesController(
  getMovieReleasesUseCase,
)
