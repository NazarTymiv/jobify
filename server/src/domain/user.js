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

  static async updateUserProfile(userId, fields) {
    const updatedProfile = await dbClient.profile.update({
      where: {
        userId: Number(userId)
      },
      data: fields
    })

    return updatedProfile
  }

  static async deleteUserById(userId) {
    const deletedUser = await dbClient.user.delete({
      where: {
        id: Number(userId)
      }
    })

    return deletedUser
  }

  static async updateUserPassword(userId, password) {
    const updatedUserPassword = await dbClient.user.update({
      where: {
        id: Number(userId)
      },
      data: {
        password
      }
    })

    return updatedUserPassword
  }

  static async addNewFollower(followerId, followsId) {
    const addedFollower = await dbClient.follower.create({
      data: {
        follower: {
          connect: {
            id: Number(followerId)
          }
        },
        follows: {
          connect: {
            id: Number(followsId)
          }
        }
      },
      include: {
        follower: true,
        follows: true
      }
    })

    return addedFollower
  }

  static async getFollowByFollowerIdFollowsId(followerId, followsId) {
    const foundFollow = await dbClient.follower.findFirst({
      where: {
        followerId: Number(followerId),
        followsId: Number(followsId)
      }
    })

    return foundFollow
  }
}
