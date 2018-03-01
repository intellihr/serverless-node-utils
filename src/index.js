import Resp from './response'
import { validate as jsv } from './jsonSchema'
import { awsPromisify as awsp, execPromisify as execp } from './promisify'
import { swagger as _swagger } from './swagger'
import { kinesis as _kinesis } from './kinesis'
import { dynamoDB as _dynamoDB } from './dynamoDB'
import { s3 as _s3 } from './s3'
import { sqs as _sqs } from './sqs'
import { cloudWatch as _cloudWatch } from './cloudWatch'
import { logger as _logger } from './logger'

export const Response = Resp

export const jsValidate = jsv

export const awsPromisify = awsp
export const execPromisify = execp

export const swagger = _swagger

export const kinesis = _kinesis
export const dynamoDB = _dynamoDB
export const s3 = _s3
export const sqs = _sqs
export const cloudWatch = _cloudWatch

export const logger = _logger
