import React from "react"

class TestState extends React.Component<{}, {count: number}> {
  constructor(props: any) {
    super(props);
    this.state = {count: 0}
  }
  componentDidMount() {
    console.log('---set count before---')
    this.setState({
      count: 1
    })
    console.log('---set count after---', this.state.count)
  }
  render(): React.ReactNode {
      return <h1>hello world</h1>
  }
}
export default TestState