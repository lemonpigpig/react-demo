import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
@decorator
class a {}
function decorator(target) {
  target.nnn = 123
}
const aa = new a()
console.log('---aa----:', aa)
const appState = observable({
  counter: 0
})
console.log('---appState----:', appState)
appState.increment = function() {
  this.counter++
}
@observer
class Mobx extends Component {
  render() {
    return (
      <div className="Mobx">
        <div>Mobx:{appState.counter}</div>
        <button onClick={this.increment}>click increment</button>
      </div>
    )
  }
  increment = () => {
    appState.increment()
  }
}

export default Mobx
