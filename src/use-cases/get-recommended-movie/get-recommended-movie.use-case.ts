import { ApiError } from '@/errors/api.error'
import { IMovieRepository } from '@/repositories/IMovie.repository'

export class GetRecommendedMovieUseCase {
  constructor(private movieRepository: IMovieRepository) {}

  async execute() {
    const movie = await this.movieRepository.getRecommended()

    if (!movie) {
      throw new ApiError('No recommended movies for now', 404)
    }

    return movie
  }
}
