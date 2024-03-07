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

  static async getEmployerById(id) {
    const foundEmployer = await dbClient.profile.findFirst({
      where: {
        user: {
          role: 'EMPLOYER',
          id: Number(id)
        }
      }
    })

    return foundEmployer
  }
}
