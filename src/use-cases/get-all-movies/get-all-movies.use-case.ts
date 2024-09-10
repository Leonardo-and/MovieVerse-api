import { ApiError } from '@/errors/api.error'
import { IMovieRepository } from '@/repositories/IMovie.repository'
import { GetAllMoviesRequestDTO } from './get-all-movies-request.dto'

export class GetAllMoviesUseCase {
  constructor(private moviesRepository: IMovieRepository) {}

  async execute(data: GetAllMoviesRequestDTO) {
    const genresFilter = data.get('g')

    const movies = await this.moviesRepository.getAll(genresFilter)

    if (!movies) {
      throw new ApiError('No movies found', 404)
    }

    return movies
  }
}
