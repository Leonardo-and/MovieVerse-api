import { TMDBRepository } from '@/repositories/TMDB.repository'
import { SearchMovieAPIController } from './search-movie-api.controller'
import { SearchMovieApiUseCase } from './search-movie-api.use-case'

const tmdbRepository = new TMDBRepository()
const searchMovieApiUseCase = new SearchMovieApiUseCase(tmdbRepository)
export const searchMovieAPIController = new SearchMovieAPIController(
  searchMovieApiUseCase,
)
