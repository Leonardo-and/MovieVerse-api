import { Request, Response } from 'express'
import { GetMovieRequestDTO } from './get-movie-request.dto'
import { GetMovieUseCase } from './get-movie.use-case'

export class GetMovieController {
  constructor(private getMovieUseCase: GetMovieUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const data = new GetMovieRequestDTO(req.params)

    const movie = await this.getMovieUseCase.execute(data)

    return res.status(200).json({
      error: false,
      status: res.statusCode,
      data: movie,
      message: 'Get movie successfully',
    })
  }
}
