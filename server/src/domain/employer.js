import dbClient from '../utils/dbClient'

export default class Employer {
  static async getAllEmployers() {
    const foundEmployers = await dbClient.user.findMany({
      where: {
        role: 'EMPLOYER'
      },
      select: {
        profile: true
      }
    })

    return foundEmployers
  }
}
