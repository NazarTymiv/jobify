import dbClient from '../utils/dbClient.js'

export default class Job {
  static async createNewJob(userId, fields) {
    const createdJob = await dbClient.job.create({
      data: {
        owner: {
          connect: {
            id: Number(userId)
          }
        },
        ...fields
      }
    })

    return createdJob
  }
}
