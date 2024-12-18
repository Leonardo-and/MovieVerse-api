import { Request, Response } from 'express'
import { SearchMovieApiRequestDTO } from './search-movie-api-request.dto'
import { SearchMovieApiUseCase } from './search-movie-api.use-case'

export class SearchMovieAPIController {
  constructor(private searchMovieApiUseCase: SearchMovieApiUseCase) {}

  async handle(req: Request, res: Response) {
    const query = new SearchMovieApiRequestDTO(req.query).get('q')

    const movies = await this.searchMovieApiUseCase.execute(query)

    return res.status(200).json({
      data: movies,
    })
  }
}
