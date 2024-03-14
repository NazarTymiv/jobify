import useAuth from '../../hooks/useAuth'

const Message = ({ message }) => {
  const { setMessage } = useAuth()

  return (
    <div
      onClick={() => setMessage('')}
      className="min-w-[300px] w-auto max-w-[400px] fixed flex items-center justify-center bg-red-500 rounded-lg py-3 px-2 text-white top-10 right-10 z-[999] cursor-pointer"
    >
      {message}
    </div>
  )
}

export default Message
