import React from "react"
import Task from "../Task"

class ImportantTasks extends React.Component {
  renderImportantTasks() {
    const {
      todosList,
      getCurrentID,
      openForm,
      updateFormAction,
      deleteTodo,
      updateTodo,
      updateTodoImportant,
    } = this.props

    return todosList
      .filter((task) => task.important)
      .map((task) => (
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
        {this.props.todosList && this.renderImportantTasks()}
        <div className="task__add" onClick={this.props.openForm}>Add new task</div>
      </div>
    )
  }
}

export default ImportantTasks
