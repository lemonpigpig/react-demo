import React, { Component } from 'react'
import Header from './header.js'
// import loadable from '@loadable/component'
import loadable from 'react-loadable'
import RouteHook from 'react-route-hook'
import {
  //   BrowserRouter as Router,
  Route
  // Link
  //   Switch,
  //   Redirect
} from 'react-router-dom'
// import User from '../user/index'
// import Home from '../home/index'
import Mobx from '../mobx/index'
import Detail from '../user/detail'
import TestRouteHook from '../hook/index'
import logo from '../logo.svg'
console.log('----loadable----:', loadable)
// const Home = loadable(() => import('../home/index'), {
//   // fallback: Loading,
// })
// const Home = React.lazy(() => import('./Home')

// <Route exact path="/" component={props => <Home {...props} />} />

const Home = loadable({
  loader: () => import(/* webpackChunkName: "view-Home" */ '../home/index'),
  loading: function() {
    return <div>loading</div>
  }
})
const User = loadable({
  loader: () => import(/* webpackChunkName: "view-User" */ '../user/index'),
  loading: function() {
    return <div>loading</div>
  }
})
console.log('---Home---:', Home)
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
    inputValue: 'lalal',
    data: 'hello world'
  }
  fetchData = () => {
    this.setState({
      data: 'i getted the data'
    })

    console.log('------fetchData----')
  }
  change = () => {
    console.log('---change----')
  }
  logout = () => {
    console.log('----logout----')
  }
  render() {
    console.log('---this.props---:', this.state)
    console.log('---Layout children----:', this.props.children)
    const data = {
      text: 'header'
    }
    const color = 'red'
    const { inputValue } = this.state
    return (
      <div className="layout">
        <Header {...data} />
        <div>i am a router content show</div>
        <div>
          <Route path="/" component={props => <Home {...props} />} exact />
          <Route path="/user" component={User} />
          <Route path="/user/:id" component={Detail} />
          <Route path="/mobx" component={Mobx} />
          <RouteHook
            path="/hook/:id"
            onEnter={this.fetchData}
            onChange={this.change}
            onLeave={this.logout}
            render={routerProps => <TestRouteHook data={this.state.data} {...routerProps} />}
          />
        </div>
        <div>
          <div className="App">
            <input type="text" style={{ color }} onChange={this.handleInput} value={inputValue} />
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
