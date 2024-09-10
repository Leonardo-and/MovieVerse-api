import { IMovieRepository } from '@/repositories/IMovie.repository'
import { DeleteMovieDTO } from './delete-movie-request.dto'
import { BadRequest } from '@/errors/bad-request.error'

export class DeleteMovieUseCase {
  constructor(private movieRepository: IMovieRepository) {}

  async execute(data: DeleteMovieDTO) {
    const movieId = data.get('id')

    const movieExists = await this.movieRepository.findById(movieId)

    if (!movieExists) throw new BadRequest('Movie not found', 404)

    await this.movieRepository.delete(movieId)
  }
}
