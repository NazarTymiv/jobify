import { useEffect, useState } from 'react'
import JobCard from '../JobCard'
import { getAllJobs } from '../../services/apiClient'
import Loader from '../Loader'

const JobsList = () => {
  const [jobs, setJobs] = useState()

  const getJobs = async () => {
    try {
      const { data } = await getAllJobs()

      setJobs(data.jobs)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getJobs()
  }, [])

  return (
    <div className="w-[400px] h-[544px] relative">
      {jobs && jobs.length === 0 ? (
        <p className="text-white font-semibold self-center text-2xl text-center">
          You already viewed all published jobs :)
        </p>
      ) : jobs ? (
        jobs.map((job, index) => (
          <JobCard key={index} data={job} order={index} />
        ))
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default JobsList
