import { AbstractDTO } from '@/dtos/abstract.dto'
import { z } from 'zod'
const getAllMoviesRequestDTOSchema = z.object({
  g: z.string().optional(),
})
export class GetAllMoviesRequestDTO extends AbstractDTO<
  typeof getAllMoviesRequestDTOSchema
> {
  protected rules() {
    return getAllMoviesRequestDTOSchema
  }
}
