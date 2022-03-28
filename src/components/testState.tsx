import React from "react"

class TestState extends React.Component<{}, {name: string, age: number}> {
  constructor(props: any) {
    super(props);
    this.state = {name: 'w', age: 12}
  }
  increment = () => {
    this.setState((state) => ({
      age: state.age + 1
    }))
  }
  componentDidMount() {
    console.log('---set count before---')
    this.setState({
      age: 1
    })
    console.log(this.state.age)
    console.log('---set count after---', this.state)
  }
  render(): React.ReactNode {
      return <h1 onClick={this.increment}>hello world {this.state.age}</h1>
  }
}
export default TestState