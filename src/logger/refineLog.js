import _ from 'lodash'
import yamljs from 'yamljs'
import { curry, compose } from 'ramda'

const yamlifyLogIfOffline = curry(
  ({ IS_OFFLINE }, yamljs, log) => params => {
    if (IS_OFFLINE) {
      return log(yamljs.stringify(params, null, 2))
    }
    return log(params)
  }
)(process.env, yamljs)

const omitNilValueInLog = curry(
  (_, log) => params => log(_.omitBy(params, _.isNil))
)(_)

const filterLogByLoggingLevel = curry(
  ({ LOGGING_LEVEL }, log) => {
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

    return params => {
      const {
        level
      } = params

      if (!LOGGING_LEVEL || levelMap[level] <= levelMap[LOGGING_LEVEL]) {
        log(params)
      }
    }
  }
)(process.env)

export const refineLog = compose(
  yamlifyLogIfOffline,
  omitNilValueInLog,
  filterLogByLoggingLevel
)
