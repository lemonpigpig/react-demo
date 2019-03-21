import React, { Component } from 'react'
import {
  //   BrowserRouter as Router,
  // Route,
  // Link,
  //   Switch,
  Redirect
} from 'react-router-dom'
class TestRouteHook extends Component {
  componentWillMount() {}
  componentDidMount() {
    // console.log('-----hook componentDidMount----:', this.props.match)
  }

  render() {
    const { id } = this.props.match.params
    console.log('---id----:', id, typeof id)
    if (id === '1') {
      return <Redirect push to="/home" />
    }
    return <div>i am a hook component: {this.props.data}</div>
  }
}

export default TestRouteHook
