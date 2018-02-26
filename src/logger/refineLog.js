import _ from 'lodash'
import { curry, compose } from 'ramda'

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

export const refineLog = compose(
  omitNilValueInLog,
  filterLogByLoggingLevel
)
