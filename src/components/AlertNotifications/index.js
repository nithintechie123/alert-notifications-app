import {AiFillCheckCircle} from 'react-icons/ai'

import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import './index.css'

import Notification from '../Notification'

const notificationDetails = [
  {
    id: 0,
    logo: <AiFillCheckCircle />,
    heading: 'Success',
    description: 'You can access all the files in the folder',
  },
  {
    id: 1,
    logo: <RiErrorWarningFill />,
    heading: 'Error',
    description:
      'Sorry, you are not authorized to have access to delete the file',
  },
  {
    id: 2,
    logo: <MdWarning />,
    heading: 'Warning',
    description: 'Viewers of this file can see comments and suggestions',
  },
  {
    id: 3,
    logo: <MdInfo />,
    heading: 'Info',
    description: 'Anyone on the internet can view these files',
  },
]

const AlertNotifications = () => (
  <div className="alert-notifications-container">
    <h1 className="app-heading">Alert Notifications</h1>
    <ul className="notifications-list-container">
      {notificationDetails.map(eachNotification => (
        <Notification key={eachNotification.id}>
          {eachNotification}
        </Notification>
      ))}
    </ul>
  </div>
)

export default AlertNotifications
