import { AbstractDTO } from '@/dtos/abstract.dto'
import { z } from 'zod'

const deleteMovieSchema = z.object({
  id: z.string(),
})

export class DeleteMovieDTO extends AbstractDTO<typeof deleteMovieSchema> {
  protected rules() {
    return deleteMovieSchema
  }
}
