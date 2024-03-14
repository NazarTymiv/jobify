import { useEffect, useState } from 'react'
import Loader from '../../components/Loader'
import SavedJobItem from '../../components/SavedJobItem'
import useAuth from '../../hooks/useAuth'
import { getAllSavedJobs } from '../../services/apiClient'

const SavedJobsPage = () => {
  const { setMessage } = useAuth()

  const [jobs, setJobs] = useState()

  const getSavedJobs = async () => {
    try {
      const { data } = await getAllSavedJobs()

      setJobs(data.savedJobs)
    } catch (error) {
      setMessage(error.response.data.error)
    }
  }

  useEffect(() => {
    getSavedJobs()
  }, [])

  return (
    <div className="w-full h-auto px-52 relative flex flex-col space-y-10">
      <h2 className="text-white font-semibold text-3xl">Saved Jobs</h2>
      {jobs && jobs.length === 0 ? (
        <p className="text-white font-semibold self-center text-2xl">
          You do not have saved jobs :(
        </p>
      ) : jobs ? (
        jobs.map((job, index) => (
          <SavedJobItem data={job} key={index} getSavedJobs={getSavedJobs} />
        ))
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default SavedJobsPage
