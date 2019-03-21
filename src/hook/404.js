import React, { Component } from 'react'
class Hook404 extends Component {
  componentWillMount() {}
  componentDidMount() {
    // console.log('-----hook componentDidMount----:', this.props.match)
  }

  render() {
    return <div>您没有访问权限</div>
  }
}

export default Hook404
