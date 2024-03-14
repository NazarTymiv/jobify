import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { FaUser } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import navigators from './navigators'

const Navigation = () => {
  const { user } = useAuth()

  const [profilePicture, setProfilePicture] = useState('')

  useEffect(() => {
    if (user) {
      setProfilePicture(user.profile_picture)
    }
  }, [user])

  return (
    <div className="w-full h-auto top-0 py-10 px-14 flex items-center relative justify-between z-50">
      <div className="flex items-center justify-start space-x-7">
        {user &&
          navigators[user.role].map((navigate, index) => (
            <Link to={navigate.path} key={index}>
              <navigate.icon className="size-[30px] text-white" />
            </Link>
          ))}
      </div>
      <Link to="/profile">
        <div className="size-[50px] rounded-full border-2 border-semiGrey  flex items-center justify-center">
          {profilePicture ? (
            <img
              src={profilePicture}
              alt="profile picture"
              className="size-full rounded-full"
            />
          ) : (
            <FaUser className="size-6 text-white" />
          )}
        </div>
      </Link>
    </div>
  )
}

export default Navigation
