import aws from 'aws-sdk'
import { awsPromisify } from './promisify'

function cfHelper (aws, process, promisify) {
  const cf = new aws.CloudFormation()

  return {
    listStackResources: promisify(::cf.listStackResources)
  }
}

export const cf = cfHelper(aws, process, awsPromisify)
