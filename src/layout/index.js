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
import Mobx from '../mobx/index'
import Detail from '../user/detail'
import logo from '../logo.svg'
class Layout extends Component {
  static defaultProps = {
    text: 'i am a layout'
  }
  handleInput = e => {
    const { value } = e.target
    console.log('----handleInput----:', value)
    this.setState({
      inputValue: value
    })
  }
  state = {
    inputValue: 'lalal'
  }
  render() {
    console.log('---this.props---:', this.state)
    const data = {
      text: 'header'
    }
    const color = 'red'
    const { inputValue } = this.state
    return (
      <div className="layout">
        <Header {...data} />
        <div>
          111:
          <Route path="/" component={Home} exact />
          2222:
          <Route path="/user" component={User} exact />
          <Route path="/user/:id" component={Detail} />
          <Route path="/mobx" component={Mobx} />
        </div>
        <div>
          <div className="App">
            <input
              type="text"
              style={{ color }}
              onChange={this.handleInput}
              value={inputValue}
            />
            this input value is updated to: {inputValue}
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
