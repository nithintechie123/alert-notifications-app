import './index.css'

const Notification = props => {
  const {children} = props

  const {logo, heading, description, crossIcon} = children

  return (
    <li className="each-notification-container">
      <div className={heading}>{logo}</div>
      <div className="content-container">
        <h1 className={`heading ${heading}`}>{heading}</h1>
        <p className="description">{description}</p>
      </div>
      <div>{crossIcon}</div>
    </li>
  )
}

export default Notification
