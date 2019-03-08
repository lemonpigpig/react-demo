import React, { Component } from 'react'
@decorator
class a {}
function decorator(target) {
  target.nnn = 123
}
const aa = new a()
console.log('---aa----:', aa)
class Mobx extends Component {
  render() {
    return (
      <div className="Mobx">
        <div>Mobx</div>
      </div>
    )
  }
}

export default Mobx
