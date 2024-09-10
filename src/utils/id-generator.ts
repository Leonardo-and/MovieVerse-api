import { customAlphabet } from 'nanoid'

class IdGenerator {
  public handle(size = 8) {
    const nanoid = customAlphabet('1234567890', size)
    const id = nanoid()

    return id
  }
}

export const idGenerator = new IdGenerator()
