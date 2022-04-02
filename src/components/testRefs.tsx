import React from "react";
import HelloWorld from "./helloworld";

class TestRefs extends React.Component<{}, {}> {
  input: React.RefObject<HTMLInputElement>;
  h1: React.RefObject<HTMLHeadingElement>;
  helloWorld: React.RefObject<HelloWorld>;
  constructor(props: any) {
    super(props);
    this.input = React.createRef();
    this.h1 = React.createRef();
    this.helloWorld = React.createRef()
  }
  handleSubmit = (event: React.SyntheticEvent) => {
    console.log(this.input.current?.value);
    console.log(this.h1);
    console.log(this.helloWorld.current?.sayHello());
    this.helloWorld.current?.sayHello()
    event.preventDefault()
  }
  render(): React.ReactNode {
    return <div>
      <h1 ref={this.h1}>testrefs</h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          name: <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="submit" />
      </form>
      <HelloWorld ref={this.helloWorld} />
    </div>
  }
}
export default TestRefs