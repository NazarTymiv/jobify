import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import randomGenerator from '../../utils/randomGenerator'
import { addJobToRemoved, addJobToSaved } from '../../services/apiClient'
import useAuth from '../../hooks/useAuth'

const SCREEN_WIDTH = window.innerWidth

const JobCard = ({ data, order, viewJobHandler }) => {
  const { setMessage } = useAuth()

  const cardPos = useSpring({
    x: 0,
    y: 0,
    r: 0
  })

  const bindCardPos = useDrag(async (params) => {
    const x = params.offset[0]
    const y = params.offset[1]

    const refreshParams = () => {
      params.offset[0] = 0
      params.offset[1] = 0
      cardPos.x.start(0)
      cardPos.y.start(0)
      cardPos.r.start(0)
    }

    if (params.dragging) {
      cardPos.x.start(x)
      cardPos.y.start(y)

      if (x > 0) {
        cardPos.r.start(5)
      } else {
        cardPos.r.start(-5)
      }
    } else {
      if (x > SCREEN_WIDTH / 5) {
        cardPos.x.start(SCREEN_WIDTH / 1.5)

        try {
          await addJobToSaved(data.id)
          await addJobToRemoved(data.id)
          viewJobHandler(data.id)
          refreshParams()
        } catch (error) {
          setMessage(error.response.data.error)
        }
      } else if (x < -SCREEN_WIDTH / 5) {
        cardPos.x.start(-SCREEN_WIDTH / 1.5)

        try {
          await addJobToRemoved(data.id)
          viewJobHandler(data.id)
          refreshParams()
        } catch (error) {
          setMessage(error.response.data.error)
        }
      } else {
        refreshParams()
      }
    }
  })

  return (
    <animated.div
      {...bindCardPos()}
      className={`w-full h-full bg-white rounded-lg pt-20 px-10 pb-10 absolute select-none shadow-3xl ${
        order !== 0 ? 'hidden' : 'flex'
      } flex-col items-center`}
      style={{
        x: cardPos.x,
        y: cardPos.y,
        rotate: cardPos.r
      }}
    >
      <div className="w-full h-[130px] bg-semiGrey absolute top-0 rounded-t-lg border-b"></div>
      <div className="size-24 bg-grey rounded-xl mb-5 z-0"></div>
      <h2 className="text-2xl font-bold text-black mb-2">{data.title}</h2>
      <p className="text-accent font-semibold text-sm mb-3">55 000 - 65 000$</p>
      <div className="flex items-center justify-between space-x-1 mb-10">
        <div className="bg-semiGrey w-auto max-h-[15px] py-3 px-4 flex items-center justify-center rounded-2xl">
          <p className="text-xs text-nowrap font-semibold">{data.location}</p>
        </div>
        <div className="bg-semiGrey w-auto max-h-[15px] py-3 px-4 flex items-center justify-center rounded-2xl">
          <p className="text-xs text-nowrap font-semibold">Part-time</p>
        </div>
        <div className="bg-semiGrey w-auto max-h-[15px] py-3 px-4 flex items-center justify-center rounded-2xl">
          <p className="text-xs text-nowrap font-semibold">Hybrid</p>
        </div>
      </div>
      <div className="w-full flex items-center justify-between">
        <h2 className="text-2xl font-bold text-black">Job Description</h2>
        <span className="text-xs text-grey">2 days ago</span>
      </div>
      <p className="self-start text-sm">{data.description}</p>
    </animated.div>
  )
}

export default JobCard
