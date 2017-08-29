import aws from 'aws-sdk'
import boolean from 'boolean'

function getDynamoDBClient () {
  let options = {}

  if (boolean(process.env.IS_OFFLINE)) {
    options = {
      region: 'localhost',
      endpoint: 'http://dynamodb:8000',
      credentials: new aws.Credentials('accessKey', 'secretKey')
    }
  }

  return new aws.DynamoDB.DocumentClient(options)
}

export const dynamoDBClient = getDynamoDBClient()
