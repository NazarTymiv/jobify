import dbClient from '../utils/dbClient.js'

export default class Auth {
  static async register({ email, hashedPassword, role, firstName, lastName }) {
    const registeredUser = await dbClient.user.create({
      data: {
        email,
        password: hashedPassword,
        role,
        profile: {
          create: {
            firstName,
            lastName
          }
        }
      },
      include: {
        profile: true
      }
    })

    return registeredUser
  }
}
