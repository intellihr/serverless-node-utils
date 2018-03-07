import { omitBy, isNil } from 'lodash'
import { compose } from 'ramda'

const omitNilValueInLog = fn => params => fn(omitBy(params, isNil))

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
