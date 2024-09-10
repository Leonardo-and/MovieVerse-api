import { IMovieRepository } from '@/repositories/IMovie.repository'
import { SearchMovieRequestDTO } from './search-movie-request.dto'
import { BadRequest } from '@/errors/bad-request.error'

export class SearchMovieUseCase {
  constructor(private moviesRepository: IMovieRepository) {}

  async execute(data: SearchMovieRequestDTO) {
    const queryParam = data.get('q')

    const movies = await this.moviesRepository.findByTitle(queryParam)

    if (!movies.length) {
      throw new BadRequest('No movies found.')
    }

    return movies
  }
}
