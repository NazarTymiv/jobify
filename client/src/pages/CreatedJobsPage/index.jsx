import { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import Loader from '../../components/Loader'
import CreatedJobItem from '../../components/CreatedJobItem'

const CreatedJobsPage = () => {
  const { setMessage } = useAuth()

  const [jobs, setJobs] = useState()

  const getCreatedJobs = async () => {
    try {
    } catch (error) {
      setMessage(error.response.data.error)
    }
  }

  useEffect(() => {
    getCreatedJobs()
  }, [])

  return (
    <div className="w-full h-auto px-52 relative flex flex-col space-y-10">
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
