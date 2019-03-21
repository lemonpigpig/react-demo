import React, { Component } from 'react'
import {
  //   BrowserRouter as Router,
  // Route,
  Link,
  NavLink
  // NavLink
  //   Switch,
  //   Redirect
} from 'react-router-dom'
// import Detail from './detail'
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
          <NavLink
            to="/user/2"
            activeStyle={{
              fontWeight: 'bold',
              color: 'red'
            }}
          >
            user2
          </NavLink>
        </div>
        <h3>ueser detail</h3>
        <div>{/* <Route path="/user/:id" component={Detail} exact /> */}</div>
      </div>
    )
  }
}

export default User
