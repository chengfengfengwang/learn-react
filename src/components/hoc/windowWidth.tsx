// import React from "react";
// class App extends React.Component<{}, { width: number, height: number }>{
//     constructor(props: any) {
//         super(props);
//         this.state = {
//             width: document.documentElement.clientWidth,
//             height: document.documentElement.clientHeight
//         }
//     }
//     handleResize = () => {
//         this.setState({
//             width: document.documentElement.clientWidth,
//             height: document.documentElement.clientHeight
//         })
//     }
//     componentDidMount() {
//         window.addEventListener('resize', this.handleResize)
//     }
//     componentWillUnmount() {
//         window.removeEventListener('resize', this.handleResize)
//     }
//     render() {
//         const {width, height} = this.state;
//         return <h1>x:{width} y:{height}</h1>
//     }
// }
// export default App

import React from "react";
const widthSize = (Component: (props:any) => JSX.Element) => {
    return class extends React.Component<{}, { width: number, height: number }>{
        constructor(props: any) {
            super(props);
            this.state = {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            }
        }
        handleResize = () => {
            this.setState({
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            })
        }
        componentDidMount() {
            window.addEventListener('resize', this.handleResize)
        }
        componentWillUnmount() {
            window.removeEventListener('resize', this.handleResize)
        }
        render() {
            // 1. hoc接收一个组件作为参数，让这个组件承担渲染功能
            // 2. hoc本身有state，有生命周期， 有自己更新state的逻辑和解除绑定的逻辑
            // 3. state更新之后，触发传入组件的更新
            // 4. 把state 传入参数组件
            return <Component {...this.state} />
        }
    }
}

export default widthSize