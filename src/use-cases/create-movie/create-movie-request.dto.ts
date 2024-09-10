import { AbstractDTO } from '@/dtos/abstract.dto'
import { z } from 'zod'

const createMovieSchema = z.object({
  title: z.string(),
  overview: z.string(),
  genres: z.array(z.string()),
  cast: z.array(z.string()),
  duration: z.number(),
  releaseDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  posterFilename: z.string(),
  backgroundFilename: z.string(),
  videoFilename: z.string(),
  logoFilename: z.string(),
})

export class CreateMovieRequestDTO extends AbstractDTO<
  typeof createMovieSchema
> {
  protected rules() {
    return createMovieSchema
  }
}
