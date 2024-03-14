import { useEffect, useState } from 'react'
import JobCard from '../JobCard'
import { getAllJobs } from '../../services/apiClient'
import Loader from '../Loader'

const JobsList = () => {
  const [jobs, setJobs] = useState([])

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
      {jobs.length > 0 ? (
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
