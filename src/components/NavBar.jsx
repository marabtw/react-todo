import React from "react"
import { Link, useLocation } from "react-router-dom"

const NavBar = (props) => {
  const location = useLocation()

  return (

    <aside className="navbar">
      <div className="navbar__header">
        <h1 className="navbar__title">TO-DO LIST</h1>
        <button
          className="navbar__add-task add-button"
          onClick={() => {
            props.openForm()
            props.updateFormAction("add")
          }}
        >
          Add new task
        </button>
      </div>
      <ul className="navbar__filters filters">
        <Link
          className={`filters__item ${
            location.pathname === "/todays-tasks" ? "active-filter" : ""
          }`}
          to="/todays-tasks"
        >
          Todays Tasks
        </Link>

        <Link
          className={`filters__item ${
            location.pathname === "/" ? "active-filter" : ""
          }`}
          to="/"
        >
          All tasks
        </Link>

        <Link
          className={`filters__item ${
            location.pathname === "/important-tasks" ? "active-filter" : ""
          }`}
          to="/important-tasks"
        >
          Important Tasks
        </Link>

        <Link
          className={`filters__item ${
            location.pathname === "/completed-tasks" ? "active-filter" : ""
          }`}
          to="/completed-tasks"
        >
          Completed Tasks
        </Link>

        <Link
          className={`filters__item ${
            location.pathname === "/uncompleted-tasks" ? "active-filter" : ""
          }`}
          to="/uncompleted-tasks"
        >
          Uncompleted Tasks
        </Link>
      </ul>
      {/* <div className="navbar__directory filters__item">
        <span className="directory__title">
          <i>icon</i> Directories
        </span>
        <ul className="directories">
          <li className="directories__item">Main</li>
        </ul>
        <button className="directories__add">+ New</button>
      </div> */}
    </aside>

  )
}

export default NavBar
