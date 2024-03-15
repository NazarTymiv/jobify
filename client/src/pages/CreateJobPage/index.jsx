import { useState } from 'react'
import useAuth from '../../hooks/useAuth'
import { createNewJob } from '../../services/apiClient'
import { useNavigate } from 'react-router-dom'

const CreateJobPage = () => {
  const { setMessage } = useAuth()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    skills: '',
    tags: ''
  })

  const onChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const createJobHandler = async (e) => {
    e.preventDefault()

    try {
      await createNewJob(formData)

      navigate('/created-jobs')
    } catch (error) {
      setMessage(error.response.data.error)
    }
  }

  return (
    <div className="w-full h-auto px-52 relative flex flex-col space-y-10">
      <h2 className="text-white font-semibold text-3xl">Create New Job</h2>

      <form
        onSubmit={createJobHandler}
        className="w-[544px] h-auto bg-white rounded-xl flex flex-col space-y-10 items-center p-10 self-center"
      >
        <label className="w-full flex flex-col space-y-2">
          <span className="text-black text-lg pl-2">
            Title <span className="text-red-600">*</span>
          </span>
          <input
            type="text"
            name="title"
            placeholder="Enter Title . . ."
            onChange={onChange}
            value={formData.title}
            className="w-full px-4 py-3 rounded-lg border bg-lightGrey"
            required
          />
        </label>

        <label className="w-full flex flex-col space-y-2">
          <span className="text-black text-lg pl-2">
            Description <span className="text-red-600">*</span>
          </span>
          <textarea
            type="text"
            name="description"
            placeholder="Enter Description . . ."
            onChange={onChange}
            value={formData.description}
            className="w-full h-[150px] px-4 py-3 rounded-lg border bg-lightGrey resize-none"
            required
          />
        </label>

        <label className="w-full flex flex-col space-y-2">
          <span className="text-black text-lg pl-2">
            Location <span className="text-red-600">*</span>
          </span>
          <input
            type="text"
            name="location"
            placeholder="Enter Location (London) . . ."
            onChange={onChange}
            value={formData.location}
            className="w-full px-4 py-3 rounded-lg border bg-lightGrey"
            required
          />
        </label>

        <label className="w-full flex flex-col space-y-2">
          <span className="text-black text-lg pl-2">Skills</span>
          <input
            type="text"
            name="skills"
            placeholder="Enter Skills (js, react, angular etc.) . . ."
            onChange={onChange}
            value={formData.skills}
            className="w-full px-4 py-3 rounded-lg border bg-lightGrey"
          />
        </label>

        <label className="w-full flex flex-col space-y-2">
          <span className="text-black text-lg pl-2">Tags</span>
          <input
            type="text"
            name="tags"
            placeholder="Enter Tags (full stack, remote etc.) . . ."
            onChange={onChange}
            value={formData.tags}
            className="w-full px-4 py-3 rounded-lg border bg-lightGrey"
          />
        </label>

        <button className="w-full py-3 bg-accent text-lightGrey text-lg font-semibold rounded-lg">
          Create
        </button>
      </form>
    </div>
  )
}

export default CreateJobPage
