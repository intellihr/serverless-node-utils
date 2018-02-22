import { curry, compose } from 'ramda'
import moment from 'moment'
import { Console } from 'console'
import _ from 'lodash'
import fs from 'fs'

const omitNil = curry(
  (_, fn) => params => fn(_.omitBy(params, _.isNil))
)(_)

const filterLog = (
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

const _logHandler = compose(
  omitNil,
  filterLog
)

const _logger = (
  ({ LOGGING }, fs, Console, _logHandler) => {
    let _console = console
    if (LOGGING === 'file') {
      if (!fs.existsSync('./output')) {
        fs.mkdirSync('./output')
      }
      const output = fs.createWriteStream('./output/log.txt')

      _console = new Console(output)
    }

    return {
      log: _logHandler(_console.log)
    }
  }
)(process.env, fs, Console, _logHandler)

const _mainLogger = curry(
  (
    { SERVICE, STAGE, HOST, REGION, LOGGING_LEVEL },
    moment,
    _logger,
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
    return {
      log: params => {
        _logger.log({
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
          ...params
        })
      }
    }
  }
)(process.env, moment, _logger)

const loggerHandler = (
  _mainLogger => {
    const handler = params => {
      const newHandler = newParams => {
        return handler({ ...params, ...newParams })
      }
      newHandler.log = _mainLogger(params).log
      return newHandler
    }
    handler.log = _mainLogger({}).log
    return handler
  }
)(_mainLogger)

export const logger = loggerHandler
