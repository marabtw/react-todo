import React from "react";
import Task from "../Task";

class TodaysTasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(this.props.todosList[0].date),
    };
  }

  isToday(dateString) {
    const today = new Date();
    const formattedToday = `${today.getFullYear()}-${String(
      today.getMonth() + 1
    ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
    return dateString === formattedToday;
  }

  renderTasks() {
    const { todosList, getCurrentID, openForm, updateFormAction, deleteTodo, updateTodo, updateTodoImportant } = this.props;

    return todosList
      .filter((task) => this.isToday(task.date))
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
      ));
  }

  render() {
    return (
      <div className="main__tasks tasks">
        {this.props.todosList && this.renderTasks()}
        <div className="task__add" onClick={this.props.openForm}>Add new task</div>
      </div>
    );
  }
}

export default TodaysTasks;
