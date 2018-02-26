import Logger from './Logger'

const loggerHandler = (
  (Object, Logger) => {
    const handler = params => {
      const newHandler = newParams => {
        return handler({ ...params, ...newParams })
      }
      return Object.assign(newHandler, new Logger(params))
    }
    return Object.assign(handler, new Logger())
  }
)(Object, Logger)

export const logger = loggerHandler
