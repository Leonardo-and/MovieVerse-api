import { AbstractDTO } from '@/dtos/abstract.dto'
import { z } from 'zod'
const streamMovieSchema = z.object({
  id: z.string(),
  range: z.string(),
})
export class StreamMovieRequestDTO extends AbstractDTO<
  typeof streamMovieSchema
> {
  protected rules() {
    return streamMovieSchema
  }
}
