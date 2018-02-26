import path from 'path'
import mkdirp from 'mkdirp'
import fs from 'fs'
import { Console } from 'console'
import { refineLog } from './refineLog'

const {
  PWD,
  LOGGING,
  LOG_FILE_LOCATION
} = process.env

export default class LoggerConsole {
  constructor ({
    logging = LOGGING,
    logFileLocation = LOG_FILE_LOCATION
  } = {}) {
    let newConsole = console
    if (logging === 'file') {
      const outputLocation = path.resolve(PWD, logFileLocation || './output/log.txt')
      const outputFolder = path.resolve(PWD, path.dirname(outputLocation))
      mkdirp.sync(outputFolder)

      const output = fs.createWriteStream(outputLocation, { flags: 'a' })

      newConsole = new Console(output)
    }

    this.log = refineLog(newConsole.log)
  }
}
