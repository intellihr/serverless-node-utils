import aws from 'aws-sdk'
import { awsPromisify } from './promisify'

function sqsHelper (aws, process, promisify) {
  const {
    IS_OFFLINE,
    SQS_ENDPOINT
  } = process.env

  let options = {}

  if (IS_OFFLINE) {
    options = {
      region: 'localhost',
      endpoint: SQS_ENDPOINT,
      credentials: new aws.Credentials('accessKey', 'secretKey')
    }
  }

  const sqs = new aws.SQS(options)

  return {
    createQueue: promisify(::sqs.createQueue),
    sendMessage: promisify(::sqs.sendMessage)
  }
}

export const sqs = sqsHelper(aws, process, awsPromisify)
