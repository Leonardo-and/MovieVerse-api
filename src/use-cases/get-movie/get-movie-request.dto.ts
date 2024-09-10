import { AbstractDTO } from '@/dtos/abstract.dto'
import { z } from 'zod'

const getMovieSchema = z.object({
  id: z.string(),
})

export class GetMovieRequestDTO extends AbstractDTO<typeof getMovieSchema> {
  protected rules() {
    return getMovieSchema
  }
}
