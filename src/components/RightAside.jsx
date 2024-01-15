import React from "react";

class RightAside extends React.Component {
  render() {
    return (
      <aside className="right-aside">
        <div className="right-aside__user">Hi, User</div>
        <div className="right-aside__darkmode">
          <h4 className="right-aside__darkmode-title">Darkmode</h4>
          <div className="right-aside__darkmode-switch switch"></div>
        </div>
        <hr />
        <ul className="right-aside__today-tasks"></ul>
        <button className="right-aside__delete-all">Delete all data</button>
      </aside>
    );
  }
}

export default RightAside;
