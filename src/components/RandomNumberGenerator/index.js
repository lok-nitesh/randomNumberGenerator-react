import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  generate = () => {
    const newCount = Math.floor(Math.random() * 101)
    this.setState({count: newCount})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the <br /> range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.generate}>
            Generate
          </button>
          <p className="heading">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
