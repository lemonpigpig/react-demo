import React, { Component } from 'react'
import {
  //   BrowserRouter as Router,
  //   Route,
  //   Link,
  NavLink
  //   Switch,
  //   Redirect
} from 'react-router-dom'

// import User from '../user/index'
// import Home from '../home/index'
class Header extends Component {
  static defaultProps = {
    text: 'i am a header'
  }
  render() {
    const { text } = this.props
    return (
      <header>
        <h1>{text}</h1>
        <ul>
          {/* <li>
              <NavLink to="/" activeClassName="selected">
                Home
              </NavLink>
            </li> */}
          <li>
            <NavLink
              to="/"
              exact
              activeStyle={{
                fontWeight: 'bold',
                color: 'red'
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user"
              activeStyle={{
                fontWeight: 'bold',
                color: 'red'
              }}
            >
              user
            </NavLink>
          </li>
          <li>about</li>
        </ul>
      </header>
    )
  }
}

export default Header
