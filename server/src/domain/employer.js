import dbClient from '../utils/dbClient.js'

export default class Employer {
  static async getAllEmployers(name) {
    const foundEmployers = await dbClient.profile.findMany({
      where: {
        user: {
          role: 'EMPLOYER'
        },
        ...(name
          ? {
              OR: [
                { firstName: { startsWith: name, mode: 'insensitive' } },
                { lastName: { startsWith: name, mode: 'insensitive' } }
              ]
            }
          : {})
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
