import { Request, Response } from 'express'
import { StreamMovieRequestDTO } from './stream-movie-request.dto'
import { StreamMovieUseCase } from './stream-movie.use-case'

export class StreamMovieController {
  constructor(private streamMovieUseCase: StreamMovieUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const data = new StreamMovieRequestDTO({
      ...req.params,
      range: req.headers.range,
    })

    const movieStream = await this.streamMovieUseCase.execute(data)

    res.writeHead(206, movieStream.headers)

    return movieStream.stream.pipe(res)
  }
}
