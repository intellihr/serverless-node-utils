import validator from 'validator'

export function UUIDValidator (uuids = []) {
  for (const uuid of uuids) {
    if (!validator.isUUID(uuid)) {
      return false
    }
  }

  return true
}
