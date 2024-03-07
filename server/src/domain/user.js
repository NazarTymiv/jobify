import dbClient from '../utils/dbClient.js'

export default class User {
  static async getUserByEmail(email) {
    const foundUser = await dbClient.user.findFirst({
      where: {
        email
      },
      include: {
        profile: true
      }
    })

    return foundUser
  }

  static async getUserById(id) {
    const foundUser = await dbClient.user.findFirst({
      where: {
        id: Number(id)
      },
      include: {
        profile: true
      }
    })

    return foundUser
  }
}
