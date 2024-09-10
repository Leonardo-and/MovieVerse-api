import { AbstractDTO } from '@/dtos/abstract.dto'
import { z } from 'zod'
const searchMovieRequestDTOSchema = z.object({
  q: z.string(),
})
export class SearchMovieRequestDTO extends AbstractDTO<
  typeof searchMovieRequestDTOSchema
> {
  protected rules() {
    return searchMovieRequestDTOSchema
  }
}
