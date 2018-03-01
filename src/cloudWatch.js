import aws from 'aws-sdk'
import { awsPromisify } from './promisify'

const {
  IS_OFFLINE,
  CLOUDWATCH_ENDPOINT
} = process.env

let options = {}

if (IS_OFFLINE) {
  options = {
    region: 'ap-southeast-2',
    endpoint: CLOUDWATCH_ENDPOINT,
    credentials: new aws.Credentials('accessKey', 'secretKey'),
    correctClockSkew: true
  }
}

const _cloudWatch = new aws.CloudWatch(options)

export const cloudWatch = {
  putMetricData: awsPromisify(::_cloudWatch.putMetricData)
}
