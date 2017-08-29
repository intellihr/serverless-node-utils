import jwt from 'jsonwebtoken'

export function getAuthorisationHeader (authorizationHeader, uploaderId) {
  const decodedToken = verifyToken(authorizationHeader)
  const userId = decodedToken.user_id

  if (!userId || userId !== uploaderId) {
    throw new Error('Invalid Token')
  }

  const token = jwt.sign(
    { user_id: userId },
    process.env.JWT_SECRET,
    { expiresIn: 2 }
  )

  return 'Bearer ' + token
}

function verifyToken (header) {
  const token = header.replace('Bearer ', '')

  return jwt.verify(token, process.env.JWT_SECRET)
}
