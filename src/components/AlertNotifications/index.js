import {AiFillCheckCircle} from 'react-icons/ai'

import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'

import './index.css'

import Notification from '../Notification'

const notificationDetails = [
  {
    logo: <AiFillCheckCircle />,
    heading: 'Success',
    description: 'You can access all the files in the folder',
    crossIcon: <GrFormClose />,
  },
  {
    logo: <RiErrorWarningFill />,
    heading: 'Error',
    description:
      'Sorry, you are not authorized to have access to delete the file',
    crossIcon: <GrFormClose />,
  },
  {
    logo: <MdWarning />,
    heading: 'Warning',
    description: 'Viewers of this file can see comments and suggestions',
    crossIcon: <GrFormClose />,
  },
  {
    logo: <MdInfo />,
    heading: 'Info',
    description: 'Anyone on the internet can view these files',
    crossIcon: <GrFormClose />,
  },
]

const AlertNotifications = () => (
  <div className="alert-notifications-container">
    <h1 className="app-heading">Alert Notifications</h1>
    <ul className="notifications-list-container">
      {notificationDetails.map(eachNotification => (
        <Notification>{eachNotification}</Notification>
      ))}
    </ul>
  </div>
)

export default AlertNotifications
