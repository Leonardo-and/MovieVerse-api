import { GetMovieUseCase } from './get-movie.use-case'
import { GetMovieController } from './get-movie.controller'
import { MoviesRepository } from '@/repositories/Movie.repository'

const moviesRepository = new MoviesRepository()
const getMovieUseCase = new GetMovieUseCase(moviesRepository)
export const getMovieController = new GetMovieController(getMovieUseCase)
