import React, { Component } from 'react'

class Test extends Component {
  static defaultProps = {
    text: 'i am a test component'
  }
  render() {
    const { text, counter } = this.props
    console.log('---testcounter---', this.props)
    return (
      <div>
        <h1>
          {text}
          {counter}
        </h1>
      </div>
    )
  }
}

export default Test
