import { IMovieRepository } from '@/repositories/IMovie.repository'
import { StreamMovieRequestDTO } from './stream-movie-request.dto'
import { BadRequest } from '@/errors/bad-request.error'
import { StreamMovieService } from '@/services/stream-movie'

export class StreamMovieUseCase {
  constructor(private moviesRepository: IMovieRepository) {}

  async execute(data: StreamMovieRequestDTO) {
    const movieData = data.getAll()

    const movie = await this.moviesRepository.findById(movieData.id)

    if (!movie) {
      throw new BadRequest('Movie not found', 404)
    }

    const streamService = new StreamMovieService().stream(
      movie.videoFilename,
      movieData.range,
    )

    return streamService
  }
}
