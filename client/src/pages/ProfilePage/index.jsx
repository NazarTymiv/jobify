import { useEffect, useState } from 'react'
import Message from '../../components/Message'
import { getUserData } from '../../services/apiClient'
import Loader from '../../components/Loader'

const ProfilePage = () => {
  const [userProfile, setUserProfile] = useState()
  const [message, setMessage] = useState('')

  const getUserProfile = async () => {
    try {
      const { data } = await getUserData()

      setUserProfile(data.profile)
    } catch (error) {
      setMessage(error.response.data.error)
    }
  }

  useEffect(() => {
    getUserProfile()
  }, [])

  return (
    <div className="w-full h-auto px-52">
      {userProfile ? (
        <div className="w-full h-[250px] bg-white rounded-lg"></div>
      ) : (
        <Loader />
      )}

      {message && <Message message={message} />}
    </div>
  )
}

export default ProfilePage
