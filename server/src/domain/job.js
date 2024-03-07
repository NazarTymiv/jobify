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

  static async getJobByTitle(title) {
    const foundJob = await dbClient.job.findFirst({
      where: {
        title
      }
    })

    return foundJob
  }

  static async getJobById(id) {
    const foundJob = await dbClient.job.findFirst({
      where: {
        id: Number(id)
      }
    })

    return foundJob
  }

  static async deleteJobById(id) {
    const deletedJob = await dbClient.job.delete({
      where: {
        id: Number(id)
      }
    })

    return deletedJob
  }

  static async updateJobById(jobId, fields) {
    const updatedJob = await dbClient.job.update({
      data: fields,
      where: {
        id: Number(jobId)
      }
    })

    return updatedJob
  }

  static async getAllJobs() {
    const foundJobs = await dbClient.job.findMany()

    return foundJobs
  }

  static async addJobToSaved(userId, jobId) {
    const savedJob = await dbClient.savedJob.create({
      data: {
        user: {
          connect: {
            id: Number(userId)
          }
        },
        job: {
          connect: {
            id: Number(jobId)
          }
        }
      },
      include: {
        user: true,
        job: true
      }
    })

    return savedJob
  }

  static async getSavedJobByUserIdAndJobId(userId, jobId) {
    const foundSavedJob = await dbClient.savedJob.findFirst({
      where: {
        userId: Number(userId),
        jobId: Number(jobId)
      }
    })

    return foundSavedJob
  }
}
