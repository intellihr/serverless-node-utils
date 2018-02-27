import aws from 'aws-sdk'
import { awsPromisify } from './promisify'

function s3Helper (aws, process, promisify) {
  const {
    IS_OFFLINE,
    S3_ENDPOINT
  } = process.env

  let options = {}

  if (IS_OFFLINE) {
    options = {
      region: 'localhost',
      endpoint: S3_ENDPOINT,
      credentials: new aws.Credentials('accessKey', 'secretKey')
    }
  }

  const s3 = new aws.S3(options)

  return {
    putObject: promisify(::s3.putObject),
    createBucket: promisify(::s3.createBucket)
  }
}

export const s3 = s3Helper(aws, process, awsPromisify)
