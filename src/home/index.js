import React, { Component } from 'react'
class Home extends Component {
  static defaultProps = {
    a: 11,
    default: 'default value'
  }
  state = {
    state1: 'state1'
  }
  componentWillMount() {
    setTimeout(() => {
      this.setState({
        state1: 'changed state1'
      })
    }, 2000)
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
        <div>home:{this.props.default ? this.props.default : 'lalal'}</div>
      </div>
    )
  }
}

export default Home
