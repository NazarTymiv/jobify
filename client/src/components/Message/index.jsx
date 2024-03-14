const Message = ({ message }) => {
  return (
    <div className="min-w-[300px] w-auto max-w-[400px] fixed flex items-center justify-center bg-red-500 rounded-lg py-3 text-white top-10 right-10">
      {message}
    </div>
  )
}

export default Message
