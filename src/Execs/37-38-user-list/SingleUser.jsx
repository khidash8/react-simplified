import PropTypes from "prop-types"

export const SingleUser = ({ user }) => {
  const { name } = user

  return <li>{name}</li>
}

SingleUser.propTypes = {
  user: PropTypes.object.isRequired,
}
