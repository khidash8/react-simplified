import "../user.css"
import PropTypes from "prop-types"

export const UserCard = ({ data }) => {
  const { name, age, phoneNumber, address } = data
  return (
    <div className="card">
      <h1 className="name">{name}</h1>
      <div className="body">
        <div className="label">Age:</div>
        <div>{age}</div>
        <div className="label">Phone:</div>
        <div>{phoneNumber}</div>
        <div className="label">Address:</div>
        <div>{address}</div>
      </div>
    </div>
  )
}

UserCard.propTypes = {
  data: PropTypes.object.isRequired,
}
