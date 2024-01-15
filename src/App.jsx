import React from "react"
import "./App.scss"
import NavBar from "./components/NavBar"
import RightAside from "./components/RightAside"
import AllTasks from "./components/filters/AllTasks"
import CompletedTasks from "./components/filters/CompletedTasks"
import UncompletedTasks from "./components/filters/UncompletedTasks"
import TodaysTasks from "./components/filters/TodayTasks"
import ImportantTasks from "./components/filters/ImportantTasks"
import Header from "./components/Header"
import AddEditTask from "./components/AddEditTask"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todosList: [],
      isFormOpen: false,
      formAction: "add",
      currentID: "123",
    }
  }

	componentDidMount() {
    const storedTodos = localStorage.getItem("todosList");
    if (storedTodos) {
      this.setState({ todosList: JSON.parse(storedTodos) });
    }
  }
	componentDidUpdate() {
    localStorage.setItem("todosList", JSON.stringify(this.state.todosList));
  }

  render() {
    const commonProps = {
      todosList: this.state.todosList,
      openForm: this.toggleForm,
      getCurrentID: (id) => {
        this.setState({
          currentID: id,
        })
      },
      updateFormAction: this.updateFormAction,
      deleteTodo: this.deleteTodo,
      updateTodo: this.updateTodoStatus,
      updateTodoImportant: this.updateTodoImportant,
    }
    return (
      <>
        <Router>
          <NavBar
            updateFormAction={this.updateFormAction}
            openForm={this.toggleForm}
          />
          <main>
            <Header amountOfTasks={this.state.todosList.length} openForm={this.toggleForm}/>
            <Routes>
              <Route
                path="/todays-tasks"
                element={<TodaysTasks {...commonProps} />}
              />
              <Route path="/" element={<AllTasks {...commonProps} />} />
              <Route
                path="/important-tasks"
                element={<ImportantTasks {...commonProps} />}
              />
              <Route
                path="/completed-tasks"
                element={<CompletedTasks {...commonProps} />}
              />
              <Route
                path="/uncompleted-tasks"
                element={<UncompletedTasks {...commonProps} />}
              />
            </Routes>
          </main>
          {/* <RightAside /> */}
          {this.state.isFormOpen && (
            <AddEditTask
              formAction={this.state.formAction}
              closeForm={this.toggleForm}
              onAddTodo={this.addTodo}
              onEditTodo={this.editTodo}
            />
          )}
        </Router>
      </>
    )
  }

  toggleForm = () => {
    this.setState((prevState) => ({
      isFormOpen: !prevState.isFormOpen,
    }))
  }
  updateFormAction = (newValue) => {
    this.setState({ formAction: newValue })
  }

  addTodo = (todo) => {
    this.setState((prevState) => ({
      todosList: [...prevState.todosList, { ...todo }],
    }))
  }

  editTodo = (todo) => {
    const editingIndex = this.state.todosList.findIndex(
      (el) => el.id === this.state.currentID
    )
    if (editingIndex !== -1) {
      const updatedTodosList = [...this.state.todosList]
      updatedTodosList[editingIndex] = { id: this.state.currentID, ...todo }
      this.setState({ todosList: updatedTodosList })
    }
  }

  deleteTodo = (id) => {
    const updatedTodosList = this.state.todosList.filter((el) => el.id !== id)
    this.setState({
      todosList: updatedTodosList,
    })
  }

  updateTodoStatus = (id) => {
    const editingIndex = this.state.todosList.findIndex((el) => el.id === id)

    if (editingIndex !== -1) {
      const updatedTodosList = [...this.state.todosList]
      updatedTodosList[editingIndex] = {
        ...updatedTodosList[editingIndex],
        completed:
          updatedTodosList[editingIndex].completed === "checked"
            ? ""
            : "checked",
      }
      this.setState({ todosList: updatedTodosList })
    }
  }

  updateTodoImportant = (id) => {
    const editingIndex = this.state.todosList.findIndex((el) => el.id === id)

    if (editingIndex !== -1) {
      const updatedTodosList = [...this.state.todosList]
      updatedTodosList[editingIndex] = {
        ...updatedTodosList[editingIndex],
        important: !updatedTodosList[editingIndex].important,
      }
      this.setState({ todosList: updatedTodosList })
    }
  }
}

export default App
