import { FaUser } from 'react-icons/fa'

const SaverOfJobItem = ({ data }) => {
  return (
    <div className="w-full grid grid-cols-5 gap-5">
      <div className="flex items-center">
        <div className="size-[40px] rounded-full flex justify-center items-center bg-grey p-[10px] mr-5">
          {data.profile_picture ? (
            <img
              src={data.profile_picture}
              alt="profile picture"
              className="size-full rounded-full"
            />
          ) : (
            <FaUser className="size-full text-white" />
          )}
        </div>

        <h4 className="text-black font-semibold text-sm">
          {data.firstName} {data.lastName}
        </h4>
      </div>

      <div className="flex flex-col">
        <h5 className="text-black font-semibold mb-1">Location</h5>
        <p className="text-black">
          {data.city ?? 'empty'}, {data.country ?? 'empty'}
        </p>
      </div>

      <div className="flex flex-col">
        <h5 className="text-black font-semibold mb-1">Phone</h5>
        <p className="text-black">{data.phone_number ?? 'empty'}</p>
      </div>

      <div className="flex flex-col">
        <h5 className="text-black font-semibold mb-1">Github</h5>
        <p className="text-black">{data.github_url ?? 'empty'}</p>
      </div>

      <div className="flex flex-col">
        <h5 className="text-black font-semibold mb-1">Portfolio</h5>
        <p className="text-black">{data.portfolio_url ?? 'empty'}</p>
      </div>
    </div>
  )
}

export default SaverOfJobItem
