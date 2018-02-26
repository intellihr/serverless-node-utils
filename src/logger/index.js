import Logger from './Logger'

const createLogger = ({ assign }, Logger) => {
  const handler = params => {
    const newHandler = newParams => {
      return handler({ ...params, ...newParams })
    }
    return assign(newHandler, new Logger(params))
  }
  return assign(handler, new Logger())
}

export const logger = createLogger(Object, Logger)
