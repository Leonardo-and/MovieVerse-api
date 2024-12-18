import { AbstractDTO } from '@/dtos/abstract.dto'
import { z } from 'zod'
const searchMovieApiRequestDTOSchema = z.object({
  q: z.string(),
})
export class SearchMovieApiRequestDTO extends AbstractDTO<
  typeof searchMovieApiRequestDTOSchema
> {
  protected rules() {
    return searchMovieApiRequestDTOSchema
  }
}
