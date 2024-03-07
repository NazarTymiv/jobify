import dbClient from '../utils/dbClient.js'

export default class Employer {
  static async getAllEmployers() {
    const foundEmployers = await dbClient.profile.findMany({
      where: {
        user: {
          role: 'EMPLOYER'
        }
      }
    })

    return foundEmployers
  }
}
