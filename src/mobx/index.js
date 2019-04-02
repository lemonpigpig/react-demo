import React, { Component } from 'react'
import { observable, computed, autorun } from 'mobx'
import { observer } from 'mobx-react'
import Test from '../components/test'
@decorator
class A {}
function decorator(target) {
  target.nnn = 123
}
const aa = new A()
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
  a = 1
  @computed get getComputedA() {
    return this.a * 2
  }
  render() {
    return (
      <div className="Mobx">
        <Test {...appState} ref={(node) => {
          console.log('---node----:', node)
        }}/>
        <div>getComputedA:{this.getComputedA}</div>
        <div>Mobx:{appState.counter}</div>
        <button onClick={this.increment}>click increment</button>
      </div>
    )
  }
  increment = () => {
    appState.increment()
  }
  componentDidMount() {
    var numbers = observable([1, 2, 3])
    var sum = computed(() => numbers.reduce((a, b) => a + b, 0))

    var disposer = autorun(() => console.log(sum.get()))
    console.log(disposer)
    //     console.log('---numbers----:', numbers)
    // 输出 '6'
    //     numbers.push(0)
    //     numbers.push(4)
    // 输出 '10'

    //     disposer()
    //     numbers.push(5)
    // 不会再输出任何值。`sum` 不会再重新计算。
  }
}

export default Mobx
