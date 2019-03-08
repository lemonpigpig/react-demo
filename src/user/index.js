import React, { Component } from 'react'
import {
  //   BrowserRouter as Router,
  //   Route,
  Link
  // NavLink
  //   Switch,
  //   Redirect
} from 'react-router-dom'
class User extends Component {
  render() {
    return (
      <div className="user-list">
        <div>
          <Link to="/user/1">user1</Link>
        </div>
        <div>
          <Link to="/user/2">user2</Link>
        </div>
      </div>
    )
  }
}

export default User
