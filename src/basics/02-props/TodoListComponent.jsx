const TodoListComponent = ({ children, iscomplete }) => {
  return (
    <div>
      <label htmlFor="todo">{children}</label>
      <input type="checkbox" defaultChecked={iscomplete} />
    </div>
  )
}

export default TodoListComponent
