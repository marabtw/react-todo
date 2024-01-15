import React from "react"
import Task from "../Task"

class AllTasks extends React.Component {
  renderTasks() {
    const {
      todosList,
      getCurrentID,
      openForm,
      updateFormAction,
      deleteTodo,
      updateTodo,
      updateTodoImportant,
    } = this.props

    return todosList.map((task) => (
      <Task
        key={task.id}
        task={task}
        getCurrentID={getCurrentID}
        openForm={openForm}
        updateFormAction={updateFormAction}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        updateTodoImportant={updateTodoImportant}
      />
    ))
  }

  render() {
    return (
      <div className="main__tasks tasks">
        {this.props.todosList && this.renderTasks()}
        <div className="task__add" onClick={this.props.openForm}>Add new task</div>
      </div>
    )
  }
}

export default AllTasks
