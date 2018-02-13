import { specs as swaggerSpecs } from 'swagger-tools'
import { swaggerPromisify } from './promisify'

function swaggerToolHelper (swaggerSpecs, promisify) {
  const {
    v2
  } = swaggerSpecs

  return {
    composeModel: promisify(::v2.composeModel)
  }
}

export const swagger = swaggerToolHelper(
  swaggerSpecs,
  swaggerPromisify
)
