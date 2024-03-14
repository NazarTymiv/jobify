import { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import Loader from '../../components/Loader'
import CreatedJobItem from '../../components/CreatedJobItem'
import { getAllCreatedJobs } from '../../services/apiClient'

const CreatedJobsPage = () => {
  const { setMessage } = useAuth()

  const [jobs, setJobs] = useState()

  const getCreatedJobs = async () => {
    try {
      const { data } = await getAllCreatedJobs()

      setJobs(data)
    } catch (error) {
      setMessage(error.response.data.error)
    }
  }

  useEffect(() => {
    getCreatedJobs()
  }, [])

  return (
    <div className="w-full h-auto px-52 relative flex flex-col space-y-10">
      <h2 className="text-white font-semibold text-3xl">Created Jobs</h2>
      {jobs && jobs.length === 0 ? (
        <p className="text-white font-semibold self-center text-2xl">
          You do not have created jobs :(
        </p>
      ) : jobs ? (
        jobs.map((job, index) => (
          <CreatedJobItem
            data={job}
            key={index}
            getCreatedJobs={getCreatedJobs}
          />
        ))
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default CreatedJobsPage
