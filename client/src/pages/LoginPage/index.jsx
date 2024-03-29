import { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import { Link, useNavigate } from 'react-router-dom'
import Message from '../../components/Message'

const LoginPage = () => {
  const { login } = useAuth()
  const token = localStorage.getItem('token')

  const navigate = useNavigate()

  const [formData, setFormData] = useState({ email: '', password: '' })
  const [message, setMessage] = useState('')

  const onChange = (e) => {
    if (message) {
      setMessage('')
    }

    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const loginHandler = async (e) => {
    e.preventDefault()

    try {
      await login(formData)
    } catch (error) {
      setMessage(error.response.data.error)
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[544px] h-auto bg-white rounded-xl flex flex-col items-center p-10">
        <h2 className="text-3xl font-bold border-b w-full text-center pb-8 mb-10 text-black">
          Log in
        </h2>
        <form
          onSubmit={loginHandler}
          className="flex flex-col w-full space-y-10"
        >
          <label className="flex flex-col space-y-2">
            <span className="text-grey text-sm pl-2">Email*</span>
            <input
              type="email"
              name="email"
              placeholder="Enter your email..."
              onChange={onChange}
              value={formData.email}
              className="w-full px-4 py-3 rounded-lg border bg-lightGrey"
              required
            />
          </label>

          <label className="flex flex-col space-y-2">
            <span className="text-grey text-sm pl-2">Password*</span>
            <input
              type="password"
              name="password"
              placeholder="Enter your password..."
              onChange={onChange}
              value={formData.password}
              className="w-full px-4 py-3 rounded-lg border bg-lightGrey"
              required
            />
          </label>

          <button className="w-full py-3 bg-accent text-lightGrey text-lg font-semibold rounded-lg">
            Log in
          </button>
        </form>

        <span className="self-start my-3 text-sm">
          Need account?{' '}
          <Link to={'/register'} className="underline">
            Register
          </Link>
        </span>

        {message && <Message message={message} />}
      </div>
    </div>
  )
}

export default LoginPage
