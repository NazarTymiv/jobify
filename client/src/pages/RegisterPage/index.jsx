import { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import { Link, useNavigate } from 'react-router-dom'

const RegisterPage = () => {
  const { register } = useAuth()
  const token = localStorage.getItem('token')

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    role: ''
  })
  const [message, setMessage] = useState('')

  const onChange = (e) => {
    if (message) {
      setMessage('')
    }

    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const registerHandler = async (e) => {
    e.preventDefault()

    try {
      await register(formData)
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
          Register
        </h2>
        <form
          onSubmit={registerHandler}
          className="flex flex-col w-full space-y-5"
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

          <div className="grid grid-cols-2 gap-5">
            <label className="flex flex-col space-y-2">
              <span className="text-grey text-sm pl-2">First name*</span>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name..."
                onChange={onChange}
                value={formData.firstName}
                className="w-full px-4 py-3 rounded-lg border bg-lightGrey"
                required
              />
            </label>

            <label className="flex flex-col space-y-2">
              <span className="text-grey text-sm pl-2">Last name*</span>

              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name..."
                onChange={onChange}
                value={formData.lastName}
                className="w-full px-4 py-3 rounded-lg border bg-lightGrey"
                required
              />
            </label>
          </div>

          <label className="flex flex-col space-y-2">
            <span className="text-grey text-sm pl-2">Role*</span>
            <div className="grid grid-cols-2 gap-5">
              <input
                type="button"
                name="role"
                onClick={onChange}
                className={`bg-lightGrey border p-2 rounded-lg cursor-pointer text-grey ${
                  formData.role === 'EMPLOYEE' && 'text-black border-black'
                }`}
                value="EMPLOYEE"
              />

              <input
                type="button"
                name="role"
                onClick={onChange}
                className={`bg-lightGrey border p-2 rounded-lg cursor-pointer text-grey ${
                  formData.role === 'EMPLOYER' && 'text-black border-black'
                }`}
                value="EMPLOYER"
              />
            </div>
          </label>

          <button className="w-full py-3 bg-accent text-lightGrey text-lg font-semibold rounded-lg">
            Register
          </button>
        </form>

        <span className="self-start my-3 text-sm">
          Already have account?{' '}
          <Link to={'/login'} className="underline">
            Log in
          </Link>
        </span>

        {message && (
          <div className="w-[300px] fixed flex items-center justify-center bg-red-500 rounded-lg py-3 px-3 text-white top-10 right-10 text-wrap">
            {message}
          </div>
        )}
      </div>
    </div>
  )
}

export default RegisterPage
