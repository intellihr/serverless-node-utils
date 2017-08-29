import aws from 'aws-sdk'
import boolean from 'boolean'

const {
  FILE_BUCKET
} = process.env

function getS3Client () {
  let options = {}

  if (boolean(process.env.IS_OFFLINE)) {
    options = {
      s3ForcePathStyle: true,
      region: 'localhost',
      endpoint: 'http://s3:4569',
      credentials: new aws.Credentials('accessKey', 'secretKey')
    }
  }

  return new aws.S3(options)
}

export const s3Client = getS3Client()

export function generateS3SignedUrl (
  fileId,
  operation,
  {
    callback = null
  } = {}
) {
  const s3Params = {
    Key: fileId,
    Bucket: FILE_BUCKET
  }

  if (callback) {
    return s3Client.getSignedUrl(operation, s3Params, callback)
  }

  return s3Client.getSignedUrl(operation, s3Params)
}
