import useAuth from '../../hooks/useAuth'

const HomePage = () => {
  const { logout } = useAuth()

  const logoutHandler = () => {
    logout()
  }

  return (
    <div>
      <button onClick={logoutHandler}>Log out</button>
    </div>
  )
}

export default HomePage
