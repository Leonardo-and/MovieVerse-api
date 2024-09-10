import { Request, Response } from 'express'
import { GetAllMoviesUseCase } from './get-all-movies.use-case'
import { GetAllMoviesRequestDTO } from './get-all-movies-request.dto'

export class GetAllMoviesController {
  constructor(private getAllMoviesUseCase: GetAllMoviesUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const data = new GetAllMoviesRequestDTO(req.query)

    const movies = await this.getAllMoviesUseCase.execute(data)

    return res.status(200).json({
      error: false,
      status: res.statusCode,
      data: movies,
      message: 'Get all movies successfully',
    })
  }
}
