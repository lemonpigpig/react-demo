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
import '../spread/gcspread.sheets.8.40.20151.5.css'
class User extends Component {
  render() {
    console.log('----userMobx.name---:', userMobx.name)
    return (
      <div className="user-list">
        <div ref="spreadJs" />
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
  componentDidMount() {
    // var ns = window.GC.Spread.Sheets
    const GC = window.GC
    let spread = new GC.Spread.Sheets.Workbook(this.refs.spreadJs, { sheetCount: 3 })
    console.log('----spread----', spread)
  }
}

export default User
