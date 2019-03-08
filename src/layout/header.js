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
    const menuList = [
      {
        name: 'Home',
        path: '/',
        id: 1
      },
      {
        name: 'user',
        path: '/user',
        id: 2
      },
      {
        name: 'mobx',
        path: '/mobx',
        id: 3
      }
    ]
    return (
      <header>
        <h1>{text}</h1>
        <ul>
          {menuList.map(menu => {
            return (
              <li key={menu.id}>
                <NavLink
                  to={menu.path}
                  exact
                  activeStyle={{
                    fontWeight: 'bold',
                    color: 'red'
                  }}
                >
                  {menu.name}
                </NavLink>
              </li>
            )
          })}
          <li />
        </ul>
      </header>
    )
  }
}

export default Header
