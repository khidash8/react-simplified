import React from "react"

export class NameCounterClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      age: 0,
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <br />
        <br />
        <button
          onClick={() =>
            this.setState((prev) => {
              return { age: prev.age > 1 ? prev.age - 1 : 1 }
            })
          }
        >
          -
        </button>
        <span>{this.state.age}</span>
        <button
          onClick={() =>
            this.setState((prev) => {
              return { age: prev.age + 1 }
            })
          }
        >
          +
        </button>
        <br />
        <br />
        <p>
          My name is <strong>{this.state.name}</strong> and I am{" "}
          <strong>{this.state.age}</strong> years old
        </p>{" "}
      </div>
    )
  }
}
