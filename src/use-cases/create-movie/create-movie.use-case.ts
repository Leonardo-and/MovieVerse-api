import { IMovieRepository } from '@/repositories/IMovie.repository'
import { CreateMovieRequestDTO } from './create-movie-request.dto'
// import { BadRequest } from '@/errors/bad-request.error'

export class CreateMovieUseCase {
  constructor(private movieRepository: IMovieRepository) {}

  async execute(data: CreateMovieRequestDTO) {
    const movie = data.getAll()

    // const movieAlreadyExists = await this.movieRepository.findByTitle(
    //   movie.title,
    // )

    // if (movieAlreadyExists) {
    //   throw new BadRequest('Movie already exists')
    // }

    const createdMovie = await this.movieRepository.create({
      ...movie,
      releaseDate: new Date(movie.releaseDate),
    })

    return createdMovie
  }
}
