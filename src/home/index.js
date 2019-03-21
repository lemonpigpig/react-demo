import React, { Component } from 'react'
import {
  //   BrowserRouter as Router,
  //   Route,
  Link
  // NavLink
  //   Switch,
  //   Redirect
} from 'react-router-dom'
class Home extends Component {
  static defaultProps = {
    a: 11,
    default: 'default value'
  }
  state = {
    state1: 'state1'
  }
  componentWillMount() {
    // 加入异步对动态加造成问题
    // setTimeout(() => {
    //   this.setState({
    //     state1: 'changed state1'
    //   })
    // }, 2000)
    this.setState({
      state1: 'changed state1'
    })
  }
  componentDidMount() {
    // this.setState({
    //   state1: 'changed2 state1'
    // })
  }
  render() {
    console.log('------i am rendering ------')
    return (
      <div className="home">
        {this.state.state1}
        <Link to="/user/1">user1</Link>
        <div>home:{this.props.default ? this.props.default : 'lalal'}</div>
      </div>
    )
  }
}

export default Home
