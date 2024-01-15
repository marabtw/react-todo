import React from "react"
import { FaRegTrashAlt, FaPen, FaCalendarAlt, FaRegStar } from "react-icons/fa"

class Task extends React.Component {
  render() {
    const {
      task,
      updateTodo,
      updateTodoImportant,
      updateFormAction,
      getCurrentID,
      openForm,
      deleteTodo,
    } = this.props

    return (
      <div key={task.id} className="task">
        <div className="task__outer">
          <p className="task__directory-name">Main</p>
        </div>
        <div className="task__inner">
          <div className="task__info">
            <h3 className="task__title">{task.title}</h3>
            <p className="task__description">{task.description}</p>
            <div className="task__date">
              <FaCalendarAlt />
              <p>{task.date}</p>
            </div>
          </div>
          <hr />
          <div className="task__tools">
            <label htmlFor={`checkbox-${task.id}`} className="task__status">
              <input
                id={`checkbox-${task.id}`}
                type="checkbox"
                checked={task.completed}
                onChange={() => {
                  updateTodo(task.id)
                }}
              />
              <span>{task.completed ? "completed" : "uncompleted"}</span>
            </label>
            <div className="task__buttons">
              <FaRegStar
                className={`task__important-icon task__icon ${
                  task.important ? "important" : ""
                }`}
                onClick={() => {
                  updateTodoImportant(task.id)
                }}
              />
              <FaPen
                className="task__edit-icon task__icon"
                onClick={() => {
                  updateFormAction("edit")
                  getCurrentID(task.id)
                  openForm()
                }}
              />
              <FaRegTrashAlt
                className="task__delete-icon task__icon"
                onClick={() => {
                  deleteTodo(task.id)
                }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Task
