import aws from 'aws-sdk'
import { awsPromisify } from './promisify'

function cwHelper (aws, process, promisify) {
  const {
    IS_OFFLINE
  } = process.env

  let options = {}

  if (IS_OFFLINE) {
    options = {
      region: 'localhost',
      credentials: new aws.Credentials('accessKey', 'secretKey')
    }
  }

  const cw = new aws.CloudWatch(options)

  return {
    putMetricData: promisify(::cw.putMetricData)
  }
}

export const cw = cwHelper(aws, process, awsPromisify)
