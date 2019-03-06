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
// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   )
// }

class App extends Component {
  static defaultProps = {
    color: 'red'
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
