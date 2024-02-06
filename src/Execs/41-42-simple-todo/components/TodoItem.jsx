import PropTypes from "prop-types"

export const TodoItem = ({
  id,
  text,
  completed,
  toggleCompleted,
  handleDelete,
}) => {
  return (
    <li className="list-item">
      <label className="list-item-label">
        <input
          type="checkbox"
          data-list-item-checkbox
          checked={completed}
          onChange={(e) => toggleCompleted(id, e.target.checked)}
        />
        <span data-list-item-text>{text}</span>
      </label>
      <button data-button-delete onClick={() => handleDelete(id)}>
        Delete
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
}
