import React, { Component } from 'react'
import Header from './header.js'
import {
  //   BrowserRouter as Router,
  Route
  // Link
  //   Switch,
  //   Redirect
} from 'react-router-dom'
import User from '../user/index'
import Home from '../home/index'
import logo from '../logo.svg'
class Layout extends Component {
  static defaultProps = {
    text: 'i am a layout'
  }

  render() {
    console.log('---this.props---:', this.props)
    const data = {
      text: 'header'
    }
    const color = 'red'
    return (
      <div className="layout">
        <Header {...data} />
        <div>
          111:
          <Route path="/" component={Home} exact />
          2222:
          <Route path="/user" component={User} exact />
        </div>
        <div>
          <div className="App">
            <input type="text" style={{ color }} />

            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </div>
      </div>
    )
  }
}

export default Layout
