import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { IoHomeSharp } from 'react-icons/io5'

const Navigation = () => {
  const { user } = useAuth()

  return (
    <div className="w-full fixed top-0 py-10 px-14 flex items-center justify-between z-50">
      <div className="">
        <Link to="/">
          <IoHomeSharp className="size-[40px] text-grey hover:text-white transition-colors" />
        </Link>
      </div>
      <Link to="/profile">
        <div className="size-[50px] rounded-full bg-grey"></div>
      </Link>
    </div>
  )
}

export default Navigation
