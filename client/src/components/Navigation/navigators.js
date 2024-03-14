import { IoHomeSharp } from 'react-icons/io5'
import { IoBriefcaseSharp } from 'react-icons/io5'
import { BiSolidBriefcase } from 'react-icons/bi'
import { MdAddToPhotos } from 'react-icons/md'

const navigators = {
  EMPLOYEE: [
    {
      path: '/',
      icon: IoHomeSharp
    },
    {
      path: '/saved-jobs',
      icon: IoBriefcaseSharp
    }
  ],
  EMPLOYER: [
    { path: '/created-jobs', icon: BiSolidBriefcase },
    { path: '/create-job', icon: MdAddToPhotos }
  ]
}

export default navigators
