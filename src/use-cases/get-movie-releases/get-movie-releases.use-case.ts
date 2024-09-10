import { ApiError } from '@/errors/api.error'
import { IMovieRepository } from '@/repositories/IMovie.repository'

export class GetMovieReleasesUseCase {
  constructor(private movieRepository: IMovieRepository) {}

  public async execute() {
    const movies = await this.movieRepository.getReleases()

    if (!movies?.length) {
      throw new ApiError('No movies found')
    }

    return movies
  }
}
