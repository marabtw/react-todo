import React from "react"
import { FaListUl, FaGripHorizontal, FaSearch, FaBars } from "react-icons/fa"

class Header extends React.Component {
  // toggleNavbar = () => {
  //   const navbar = document.querySelector(".navbar")
  //   const navbarBg = document.querySelector(".navbar__bg")
  //   navbar.classList.toggle("navbar_show")
  //   // navbarBg.classList.toggle("navbar_show")
  // }

  render() {
    return (
      <div className="header">
        <header className="header__top">
          <FaBars className="header__navbar_open" />
          <div className="header__search">
            <input className="header__search-input" placeholder="Search Task" />
            <FaSearch className="header__search-icon" />
          </div>
          <div className="header__date">2023, May, 08</div>
          <button
            className="header__add-button add-button"
            onClick={this.props.openForm}
          >
            Add new task
          </button>
        </header>
        <div className="header__bottom">
          <h2 className="main__task-title">
            All tasks ({this.props.amountOfTasks} tasks)
          </h2>
          <div className="tools__icon">
            <FaListUl className="tools__list-icon tools__icon" />
            <FaGripHorizontal className="tools__grid-icon tools__icon" />
          </div>
        </div>
      </div>
    )
  }
}

export default Header
