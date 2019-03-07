import React, { Component } from 'react'
// add react-router-dom 前端路由
import {
  BrowserRouter as Router,
  Route
  //   NavLink
  //   Switch,
  //   Redirect
} from 'react-router-dom'
import './App.css'
import Layout from './layout/index'

class App extends Component {
  static defaultProps = {
    color: 'blue'
  }
  render() {
    //     debugger
    return (
      <Router>
        <Route>
          <Layout />
        </Route>
      </Router>
    )
  }
}

export default App
