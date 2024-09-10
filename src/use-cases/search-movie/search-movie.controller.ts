import { SearchMovieRequestDTO } from './search-movie-request.dto'
import { SearchMovieUseCase } from './search-movie.use-case'
import { Request, Response } from 'express'

export class SearchMovieController {
  constructor(private searchMovieUseCase: SearchMovieUseCase) {}

  async handle(req: Request, res: Response) {
    const data = new SearchMovieRequestDTO(req.query)

    const movies = await this.searchMovieUseCase.execute(data)

    return res.status(200).json({
      error: false,
      data: movies,
      status: res.statusCode,
      message: 'Get all movies successfully',
    })
  }
}
