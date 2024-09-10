import { app } from '@/app'
import { logger } from '@/lib/pino'
import { env } from '@/env'

class Server {
  private app = app
  public start() {
    this.app.listen(env.PORT, () => {
      logger.info(`Server running on ${env.URL}${env.PORT}`)
    })
  }
}

const server = new Server()
server.start()
