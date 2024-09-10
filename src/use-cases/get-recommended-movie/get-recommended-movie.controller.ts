import { GetRecommendedMovieUseCase } from './get-recommended-movie.use-case'
import { Request, Response } from 'express'

export class GetRecommendedMovieController {
  constructor(private getRecommendedMovieUseCase: GetRecommendedMovieUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const movie = await this.getRecommendedMovieUseCase.execute()

    return res.status(200).json({
      error: false,
      status: res.statusCode,
      data: movie,
      message: 'Get recommended movie successfully',
    })
  }
}
