import { IMovieApiRepository } from '@/repositories/IMovieApi.repository'
import { mapGenreIdsToNames } from '@/utils/genres'

export class SearchMovieApiUseCase {
  constructor(private movieApiRepository: IMovieApiRepository) {}

  async execute(query: string) {
    const movies = await this.movieApiRepository.search(query)

    const moviesWithGenres = mapGenreIdsToNames(movies)

    return moviesWithGenres
  }
}
