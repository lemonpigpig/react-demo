import React, { Component } from 'react'
import userMobx from './mobx'
import { observer } from 'mobx-react'
@observer
class Detail extends Component {
  render() {
    const { match } = this.props
    return (
      <div className="user-detail">
        user-{match.params.id}
        <div>name computed: {userMobx.fullName}</div>
        <button onClick={this.changeName}>changeName </button>
      </div>
    )
  }
  changeName = () => {
    //     debugger
    userMobx.fullName = 'changeName'
  }
  componentDidMount() {
    //     console.log(this.props.match.params.id)
  }
}

export default Detail
