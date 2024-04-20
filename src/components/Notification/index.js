import {Component} from 'react'
import {GrFormClose} from 'react-icons/gr'

import './index.css'

class Notification extends Component {
  render() {
    const {children} = this.props
    const {heading, logo, description} = children

    return (
      <li className="each-notification-container">
        <div className={heading}>{logo}</div>
        <div className="content-container">
          <h1 className={`heading ${heading}`}>{heading}</h1>
          <p className="description">{description}</p>
        </div>
        <div>
          <GrFormClose />
        </div>
      </li>
    )
  }
}

export default Notification
