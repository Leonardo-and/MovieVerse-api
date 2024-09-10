import path from 'path'
import fs from 'fs'

export class StreamMovieService {
  public async stream(movieFilename: string, range: string) {
    const videoPath = path.join(
      __dirname,
      '..',
      '..',
      'public',
      'movies',
      movieFilename,
    )
    const videoSize = fs.statSync(videoPath).size

    const chunkSize = 10 ** 6

    const start = Number(range.replace(/\D/g, ''))
    const end = Math.min(start + chunkSize, videoSize - 1)
    const contentLength = end - start + 1

    const headers = {
      'Content-Range': `bytes ${start}-${end}/${videoSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': contentLength,
      'Content-Type': 'video/mp4',
    }

    const stream = fs.createReadStream(videoPath, { start, end })
    return {
      stream,
      headers,
    }
  }
}
