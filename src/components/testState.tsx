import React from "react"

class TestState extends React.Component<{}, {name: string, age: number}> {
  constructor(props: any) {
    super(props);
    this.state = {name: 'w', age: 0}
  }
  increment = () => {
    this.setState((state) => ({
      age: state.age + 1
    }))
    // this.setState({age: this.state.age + 1});
    console.log(this.state.age)
  }
  componentDidMount() {
    console.log('---set count before---')
    setTimeout(() => {
      this.setState({
        age: 1
      })
      console.log(this.state.age)
    }, 0);
    
    console.log('---set count after---')
    // setTimeout(() => {
    //   console.log(this.state.age)
    // }, 1000);
  }
  render(): React.ReactNode {
      return <h1 onClick={this.increment}>hello world {this.state.age}</h1>
  }
}
export default TestState