import _ from 'lodash'
import fs from 'fs'
import path from 'path'
import moment from 'moment'
import mkdirp from 'mkdirp'
import { curry, compose } from 'ramda'
import { Console } from 'console'

const omitNilValueInLog = curry(
  (_, fn) => params => fn(_.omitBy(params, _.isNil))
)(_)

const filterLogByLoggingLevel = (
  ({ LOGGING_LEVEL }) => {
    const levelMap = {
      emerg: 0,
      alert: 1,
      crit: 2,
      err: 3,
      warning: 4,
      notice: 5,
      info: 6,
      debug: 7
    }

    return fn => params => {
      const {
        level
      } = params

      if (!LOGGING_LEVEL || levelMap[level] <= levelMap[LOGGING_LEVEL]) {
        fn(params)
      }
    }
  }
)(process.env)

const _refineLog = compose(
  omitNilValueInLog,
  filterLogByLoggingLevel
)

const _console = (
  ({ PWD, LOGGING, LOG_FILE_LOCATION }, fs, Console, path, mkdirp, _refineLog) => {
    let newConsole = console
    if (LOGGING === 'file') {
      const outputLocation = path.resolve(PWD, LOG_FILE_LOCATION || './output/log.txt')
      const outputFolder = path.resolve(PWD, path.dirname(outputLocation))
      mkdirp.sync(outputFolder)

      const output = fs.createWriteStream(outputLocation, { flags: 'a' })

      newConsole = new Console(output)
    }

    return {
      log: _refineLog(newConsole.log)
    }
  }
)(process.env, fs, Console, path, mkdirp, _refineLog)

const _logger = curry(
  (
    { SERVICE, STAGE, HOST, REGION, LOGGING_LEVEL },
    moment,
    _console,
    {
      level = 'error',
      service = SERVICE,
      environment = STAGE,
      region = REGION,
      host = HOST,
      timestamp = moment.utc().format(),
      user,
      path,
      tags,
      status,
      message,
      data,
      tenant
    }
  ) => {
    const logger = {
      log: options => {
        _console.log({
          service,
          environment,
          host,
          region,
          timestamp,
          level,
          user,
          path,
          tags,
          status,
          message,
          data,
          tenant,
          ...options
        })
      },
      emergency: (message, options = {}) => logger.log({ level: 'emerg', message, ...options }),
      alert: (message, options = {}) => logger.log({ level: 'alert', message, ...options }),
      critical: (message, options = {}) => logger.log({ level: 'crit', message, ...options }),
      error: (message, options = {}) => logger.log({ level: 'err', message, ...options }),
      warning: (message, options = {}) => logger.log({ level: 'warning', message, ...options }),
      notice: (message, options = {}) => logger.log({ level: 'notice', message, ...options }),
      info: (message, options = {}) => logger.log({ level: 'info', message, ...options }),
      debug: (message, options = {}) => logger.log({ level: 'debug', message, ...options })
    }

    return logger
  }
)(process.env, moment, _console)

const loggerHandler = (
  (Object, _logger) => {
    const handler = params => {
      const newHandler = newParams => {
        return handler({ ...params, ...newParams })
      }
      return Object.assign(newHandler, _logger(params))
    }
    return Object.assign(handler, _logger({}))
  }
)(Object, _logger)

export const logger = loggerHandler
