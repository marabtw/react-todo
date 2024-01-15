import React, { useState, useEffect, useRef } from "react"
import { v4 as uuidv4 } from "uuid"
import "../addEditTask.scss"

const AddEditTask = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
    completed: false,
    important: false,
  })

  const refAddForm = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (refAddForm.current && !refAddForm.current.contains(event.target)) {
        props.closeForm()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [props])

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }))
  }

  const handleCheckboxChange = (field, checked) => {
    setFormData((prevData) => ({ ...prevData, [field]: checked }))
  }

  const handleButtonClick = () => {
    const { title, date, description, completed, important } = formData

    const newFormData = {
      id: uuidv4(),
      title,
      date,
      description,
      completed,
      important,
    }

    if (title && date && description) {
      refAddForm.current.reset()

      if (props.formAction === "add") {
        props.onAddTodo(newFormData)
      } else {
        props.onEditTodo(newFormData)
      }

      props.closeForm()
    }
  }

  return (
    <div className="add-edit-task">
      <form className="add-edit-task__form" ref={refAddForm}>
        <h2 className="add-edit-task__title">
          {props.formAction === "add" ? "Add a task" : "Edit Task"}
        </h2>
        <div className="add-edit-task__input-group">
          <h4 className="add-edit-task__label">Title</h4>
          <input
            className="add-edit-task__input"
            placeholder="e.g., study for the test"
            type="text"
            name="title"
            onChange={(el) => handleInputChange("title", el.target.value)}
          />
        </div>
        <div className="add-edit-task__input-group">
          <h4 className="add-edit-task__label">Date</h4>
          <input
            className="add-edit-task__input"
            placeholder="dd/mm/yyyy"
            type="date"
            name="date"
            onChange={(el) => handleInputChange("date", el.target.value)}
          />
        </div>
        <div className="add-edit-task__input-group">
          <h4 className="add-edit-task__label">Description</h4>
          <textarea
            className="add-edit-task__textarea"
            placeholder="e.g., study for the test"
            type="text"
            name="description"
            onChange={(el) => handleInputChange("description", el.target.value)}
          ></textarea>
        </div>
        <label
          htmlFor="form__completed"
          className="add-edit-task__checkbox-label"
        >
          <input
            className="add-edit-task__checkbox"
            type="checkbox"
            id="form__completed"
            name="completed"
            onChange={(el) =>
              handleCheckboxChange("completed", el.target.checked)
            }
          />
          <span className="add-edit-task__checkbox-text">
            Mark as completed
          </span>
        </label>
        <label
          htmlFor="form__important"
          className="add-edit-task__checkbox-label"
        >
          <input
            className="add-edit-task__checkbox"
            type="checkbox"
            id="form__important"
            name="important"
            onChange={(el) =>
              handleCheckboxChange("important", el.target.checked)
            }
          />
          <span className="add-edit-task__checkbox-text">
            Mark as important
          </span>
        </label>

        <button
          type="button"
          className="add-edit-task__button"
          onClick={handleButtonClick}
        >
          {props.formAction === "add" ? "Add a task" : "Edit Task"}
        </button>
      </form>
    </div>
  )
}

export default AddEditTask
