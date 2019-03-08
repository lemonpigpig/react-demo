import React, { Component } from 'react'
class Detail extends Component {
  render() {
    const { match } = this.props
    return <div className="user-detail">user-{match.params.id}</div>
  }
  componentDidMount() {
    //     console.log(this.props.match.params.id)
  }
}

export default Detail
