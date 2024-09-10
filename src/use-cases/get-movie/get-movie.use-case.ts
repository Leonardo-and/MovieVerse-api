import { IMovieRepository } from '@/repositories/IMovie.repository'
import { GetMovieRequestDTO } from './get-movie-request.dto'
import { ApiError } from '@/errors/api.error'

export class GetMovieUseCase {
  constructor(private movieRepository: IMovieRepository) {}

  async execute(data: GetMovieRequestDTO) {
    const movieId = data.get('id')

    const movie = await this.movieRepository.findById(movieId)

    if (!movie) {
      throw new ApiError('Movie not found', 404)
    }

    return movie
  }
}
