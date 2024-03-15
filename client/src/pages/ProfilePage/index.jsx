import { useEffect, useState } from 'react'
import { getUserData, updateUserProfile } from '../../services/apiClient'
import Loader from '../../components/Loader'
import { FaUser } from 'react-icons/fa'
import { IoMdLogOut } from 'react-icons/io'
import useAuth from '../../hooks/useAuth'

const ProfilePage = () => {
  const { logout, setMessage } = useAuth()

  const [userProfile, setUserProfile] = useState()
  const [editMode, setEditMode] = useState(false)
  const [formData, setFormData] = useState()

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

  const toggleEditMode = () => {
    setEditMode(!editMode)

    const editData = {
      firstName: userProfile.firstName,
      lastName: userProfile.lastName,
      city: userProfile.city ?? '',
      country: userProfile.country ?? '',
      github_url: userProfile.github_url ?? '',
      phone_number: userProfile.phone_number ?? '',
      portfolio_url: userProfile.portfolio_url ?? ''
    }

    setFormData(editData)
  }

  const onChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const updateProfileHandler = async () => {
    try {
      await updateUserProfile(formData)

      setEditMode(false)
      getUserProfile()
    } catch (error) {
      setMessage(error.response.data.error)
    }
  }

  return (
    <div className="w-full h-auto px-52 relative flex flex-col">
      {userProfile ? (
        <>
          <div className="w-full h-[250px] bg-semiWhite rounded-xl flex justify-center items-end relative">
            <div className="absolute flex items-center justify-center right-11 top-11">
              <IoMdLogOut
                className="size-[50px] text-white cursor-pointer"
                onClick={logout}
              />
            </div>

            <button
              onClick={toggleEditMode}
              className="absolute -bottom-[45px] right-[25px] text-grey border border-grey py-1 px-3 text-sm rounded-2xl hover:border-white hover:text-white transition-colors"
            >
              {editMode ? 'Cancel' : 'Edit profile'}
            </button>

            <div className="size-[280px] border-[5px] border-black rounded-full -mb-[140px] flex justify-center items-center bg-grey">
              {userProfile.profile_picture ? (
                <img
                  src={userProfile.profile_picture}
                  alt="profile picture"
                  className="size-full rounded-full"
                />
              ) : (
                <FaUser className="size-full text-white m-20" />
              )}
            </div>
          </div>

          <div className="w-full flex items-center justify-center mt-[160px] mb-20">
            {editMode ? (
              <div className="flex items-center justify-center space-x-2">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={onChange}
                  className="w-[200px] bg-white border-none rounded-2xl py-1 px-4"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={onChange}
                  className="w-[200px] bg-white border-none rounded-2xl py-1 px-4"
                />
              </div>
            ) : (
              <h3 className="text-white text-4xl font-semibold">
                {userProfile.firstName} {userProfile.lastName}
              </h3>
            )}
          </div>

          <div className="grid grid-cols-4 gap-10">
            <div className="flex flex-col space-y-2">
              <h3 className="text-white font-semibold text-2xl">Location</h3>

              {editMode ? (
                <div className="flex items-start justify-center flex-col space-y-2">
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={onChange}
                    placeholder="City..."
                    className="w-[200px] bg-white border-none rounded-2xl py-1 px-4 text-sm"
                  />
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={onChange}
                    placeholder="Country..."
                    className="w-[200px] bg-white border-none rounded-2xl py-1 px-4 text-sm"
                  />
                </div>
              ) : userProfile.city && userProfile.country ? (
                <p className="text-white">
                  {userProfile.city}, {userProfile.country}
                </p>
              ) : (
                <p className="text-white">Empty</p>
              )}
            </div>

            <div className="flex flex-col space-y-2">
              <h3 className="text-white font-semibold text-2xl">Github</h3>

              {editMode ? (
                <input
                  type="text"
                  name="github_url"
                  value={formData.github_url}
                  onChange={onChange}
                  placeholder="Github url..."
                  className="w-[200px] bg-white border-none rounded-2xl py-1 px-4 text-sm"
                />
              ) : userProfile.github_url ? (
                <p className="text-white">{userProfile.github_url}</p>
              ) : (
                <p className="text-white">Empty</p>
              )}
            </div>

            <div className="flex flex-col space-y-2">
              <h3 className="text-white font-semibold text-2xl">
                Phone Number
              </h3>

              {editMode ? (
                <input
                  type="text"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={onChange}
                  placeholder="Phone number..."
                  className="w-[200px] bg-white border-none rounded-2xl py-1 px-4 text-sm"
                />
              ) : userProfile.phone_number ? (
                <p className="text-white">{userProfile.phone_number}</p>
              ) : (
                <p className="text-white">Empty</p>
              )}
            </div>

            <div className="flex flex-col space-y-2">
              <h3 className="text-white font-semibold text-2xl">
                Portfolio website
              </h3>

              {editMode ? (
                <input
                  type="text"
                  name="portfolio_url"
                  value={formData.portfolio_url}
                  onChange={onChange}
                  placeholder="Portfolio url..."
                  className="w-[200px] bg-white border-none rounded-2xl py-1 px-4 text-sm"
                />
              ) : userProfile.portfolio_url ? (
                <p className="text-white">{userProfile.portfolio_url}</p>
              ) : (
                <p className="text-white">Empty</p>
              )}
            </div>
          </div>

          {editMode && (
            <button
              onClick={updateProfileHandler}
              className="py-1 px-4 border border-white text-white rounded-2xl mt-14 w-[100px] self-end mr-[25px]"
            >
              Save
            </button>
          )}
        </>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default ProfilePage
