import Loader from '../Loader'
import SaverOfJobItem from '../SaverOfJobItem'

const SaversOfJobList = ({ data }) => {
  console.log(data.length)
  return (
    <div className="w-full flex flex-col space-y-10">
      {data && data.length === 0 ? (
        <p className="text-black">Nobody saved this job yet :(</p>
      ) : data ? (
        data.map((saver, index) => <SaverOfJobItem key={index} data={saver} />)
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default SaversOfJobList
