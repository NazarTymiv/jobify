import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Navigation = () => {
  const { user } = useAuth()

  return (
    <div className="w-full fixed top-0 py-10 px-14 flex items-center justify-between z-50">
      <div className=""></div>
      <Link to="/profile">
        <div className="size-[50px] rounded-full bg-grey"></div>
      </Link>
    </div>
  )
}

export default Navigation
