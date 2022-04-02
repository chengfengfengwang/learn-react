import React, { ReactNode } from "react"

class HelloWorld extends React.Component{
  sayHello() {
    console.log('hello~')
  }
  render(): ReactNode {
      return <h1>hello world</h1>
  }
}
export default HelloWorld