import { RxCross1 } from 'react-icons/rx'
import useAuth from '../../hooks/useAuth'
import { deleteJob } from '../../services/apiClient'

const CreatedJobItem = ({ data, getCreatedJobs }) => {
  const { setMessage } = useAuth()

  const deleteCreatedJob = async () => {
    try {
      await deleteJob(data.id)

      getCreatedJobs()
    } catch (error) {
      setMessage(error.response.data.error)
    }
  }

  return (
    <div className="w-full py-10 px-5 bg-white rounded-xl flex relative">
      <div className="min-w-[60px] size-[60px] bg-grey rounded-full mr-7"></div>

      <div className="flex flex-col w-full">
        <h2 className="text-black font-semibold text-2xl mb-5">{data.title}</h2>

        <div className="w-full grid grid-cols-4 gap-10">
          <div className="flex flex-col">
            <h3 className="text-black font-semibold text-lg">Description</h3>
            <p className="text-black text-sm">{data.description}</p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-black font-semibold text-lg">Location</h3>
            <p className="text-black text-sm">{data.location}</p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-black font-semibold text-lg">Skills</h3>
            <p className="text-black text-sm">{data.skills}</p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-black font-semibold text-lg">Tags</h3>
            <p className="text-black text-sm">{data.tags}</p>
          </div>
        </div>
      </div>

      <button className="absolute right-10" onClick={deleteCreatedJob}>
        <RxCross1 className="size-6 text-black font-semibold" />
      </button>
    </div>
  )
}

export default CreatedJobItem
