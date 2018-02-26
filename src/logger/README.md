# logger

A logger which complies with our logging standard (see [Logging Format](https://intellihr.atlassian.net/wiki/spaces/DG/pages/284983300/Logging+Format))

## Environment Variables

Logger uses environment variables to set default values. These are optional.

Available variables:

| Name | Default | Available Values | Description |
| ---- | ------- | ---------------- | ----------- |
| `LOGGING_LEVEL`    | `null`   | `emerg`,`alert`,`crit`, `err`, `warning`, `notice`, `info`, `debug` | If set, log only if `level` less than or equal to this level (see: [Logging Level](#logging-level)) |  
| `LOGGING`          | `console` | `console`, `file` | This is where the logger puts its output. |
| `LOG_FILE_LOCATION`| `./output/log.txt` | Any valid path in string | Only used when `LOGGING=file`. The path where the output log is stored |
| `SERVICE`          | `null` | string | Set default value for `service` |
| `STAGE`            | `null` | string | Set default value for `environment` |
| `HOST`             | `null` | string | Set default value for `host` |
| `REGION`           | `null` | string | Set default value for `region` |

For serverless, you can set the environment variables in the `serverless.yml`

```yml
provider:
  environment:
    LOGGING_LEVEL: ${env:LOGGING_LEVEL, 'info'}
    LOGGING: ${env:LOGGING, 'console'}
    SERVICE: ${self:service}
    STAGE: ${self:custom.stage}
    REGION: ${self:custom.region}
```

## Logging Level
```javascript
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
```

## Logging Options

These are accepted as part of our standard (see [Logging Format](https://intellihr.atlassian.net/wiki/spaces/DG/pages/284983300/Logging+Format))

```javascript
const {
  level,
  service,
  environment,
  region,
  host,
  timestamp,
  user,
  path,
  tags,
  status,
  message,
  data,
  tenant
} = options

logger.log(options)
// or
logger(options).log()
```

## Usage

See [Logging Options](#logging-options) for all the accepted options

Simple:
``` js
import { logger } from '@intellihr/serverless-node-utils'

// The belows are printing the same log
// case 1
const myLogger = logger({ tags: ['test'] })
myLogger.info('This is info')

// case 2
logger.info('This is info', { tags: ['test'] })

// case 3
logger.log({ level: 'info', tags: ['test'], message: 'This is info'})

// case 4
const myLogger = logger({ tags: ['test'] })
myLogger.log({ level: 'info', message: 'This is info'})
```

Advanced:
```javascript
import { logger } from '@intellihr/serverless-node-utils'

const testLog = logger({ tags: ['test'] })

const logInfo = testLog.info
const logError = testLog.error

// Both with tags: ['test']
logInfo('This is info')
logError('This is error')
```

Example to create your own logger:
```javascript
import { logger } from '@intellihr/serverless-node-utils'

class MyLogger {
  constructor (options) {
    this._logger = logger({ 
      service: 'my-service', 
      ...options 
    })
  }
  
  info (options) {
    this._logger.info(options)
  }
}

// This will attach both service and tags
const myLogger = newLogger({ tags: ['oh-my'] })
myLogger.info('This is an info')
```
