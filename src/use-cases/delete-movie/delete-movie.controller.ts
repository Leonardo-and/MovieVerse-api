import { Request, Response } from 'express'
import { DeleteMovieUseCase } from './delete-movie.use-case'
import { DeleteMovieDTO } from './delete-movie-request.dto'

export class DeleteMovieController {
  constructor(private deleteMovieUseCase: DeleteMovieUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const data = new DeleteMovieDTO(req.params)

    await this.deleteMovieUseCase.execute(data)

    return res.status(200).json({
      error: false,
      status: res.statusCode,
      message: 'Movie deleted successfully',
      data: {},
    })
  }
}
