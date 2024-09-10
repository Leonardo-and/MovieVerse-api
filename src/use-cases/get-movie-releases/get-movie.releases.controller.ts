import { Request, Response } from 'express'
import { GetMovieReleasesUseCase } from './get-movie-releases.use-case'

export class GetMovieReleasesController {
  constructor(private getMovieReleasesUseCase: GetMovieReleasesUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const movies = await this.getMovieReleasesUseCase.execute()

    return res.status(200).json({
      error: false,
      status: res.statusCode,
      data: movies,
      message: 'Get all releases movies successfully',
    })
  }
}
