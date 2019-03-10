import React, { Component } from 'react'
import {
  //   BrowserRouter as Router,
  //   Route,
  Link
  // NavLink
  //   Switch,
  //   Redirect
} from 'react-router-dom'
import userMobx from './mobx'

class User extends Component {
  render() {
    console.log('----userMobx.name---:', userMobx.name)
    return (
      <div className="user-list">
        <div>name from computed: {userMobx.fullName}</div>
        <div>name from a function: {userMobx.getFullName()}</div>
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
