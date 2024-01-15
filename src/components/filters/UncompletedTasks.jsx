import React from "react"
import Task from "../Task"

class UncompletedTasks extends React.Component {
	renderUncompletedTasks() {
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
      .filter((task) => !task.completed)
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
        {this.props.todosList && this.renderUncompletedTasks()}
        <div className="task__add" onClick={this.props.openForm}>Add new task</div>
      </div>
    )
  }
}

export default UncompletedTasks
