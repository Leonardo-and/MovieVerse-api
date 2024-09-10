import { Request, Response } from 'express'
import { CreateMovieUseCase } from './create-movie.use-case'
import { CreateMovieRequestDTO } from './create-movie-request.dto'

export class CreateMovieController {
  constructor(private createMovieUseCase: CreateMovieUseCase) {}
  async handle(req: Request, res: Response): Promise<Response> {
    req.body.cast = JSON.parse(req.body.cast)
    req.body.genres = JSON.parse(req.body.genres)
    req.body.duration = Number(req.body.duration)

    const files = req.files as {
      [fieldname: string]: Express.Multer.File[]
    }

    const data = new CreateMovieRequestDTO({
      ...req.body,
      logoFilename: files.logo[0].filename,
      backgroundFilename: files.background[0].filename,
      posterFilename: files.poster[0].filename,
      videoFilename: files.movie[0].filename,
    })

    const createdMovie = await this.createMovieUseCase.execute(data)

    return res.status(201).json({
      error: false,
      status: res.statusCode,
      data: {
        movie: createdMovie,
      },
      message: 'Movie created successfully',
    })
  }
}
