import moment from 'moment'
import LoggerConsole from './LoggerConsole'
import { serialize } from './serialize'

const {
  SERVICE,
  STAGE,
  HOST,
  REGION
} = process.env

const _console = new LoggerConsole()

/*
 * Available options:
 * level
 * service
 * environment
 * region
 * host
 * timestamp
 * user
 * path
 * tags
 * status
 * message
 * data
 * tenant
 */
export default class Logger {
  constructor (
    options = {}
  ) {
    this._options = {
      level: 'error',
      service: SERVICE,
      environment: STAGE,
      region: REGION,
      host: HOST,
      timestamp: moment.utc().format(),
      ...options,
      data: options.data ? serialize(options.data) : null
    }

    this.emergency = ::this.emergency
    this.alert = ::this.alert
    this.critical = ::this.critical
    this.error = ::this.error
    this.warning = ::this.warning
    this.notice = ::this.notice
    this.info = ::this.info
    this.debug = ::this.debug
  }

  log (options = {}) {
    _console.log({
      ...this._options,
      ...options,
      data: options.data ? serialize(options.data) : this._options.data
    })
  }

  emergency (message, options = {}) {
    this.log({ level: 'emerg', message, ...options })
  }

  alert (message, options = {}) {
    this.log({ level: 'alert', message, ...options })
  }

  critical (message, options = {}) {
    this.log({ level: 'crit', message, ...options })
  }

  error (message, options = {}) {
    this.log({ level: 'err', message, ...options })
  }

  warning (message, options = {}) {
    this.log({ level: 'warning', message, ...options })
  }

  notice (message, options = {}) {
    this.log({ level: 'notice', message, ...options })
  }

  info (message, options = {}) {
    this.log({ level: 'info', message, ...options })
  }

  debug (message, options = {}) {
    this.log({ level: 'debug', message, ...options })
  }
}
