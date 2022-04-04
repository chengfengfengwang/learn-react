import React from "react";

class MouseTracker extends React.Component<{render: (position:{x: number, y: number})=>{}}, {x: number, y: number}> {
    constructor(props: any) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        }
    }
    handleMouseMove = ({clientX, clientY}: React.MouseEvent) => {
        this.setState({
            x: clientX,
            y: clientY
        })
    }
    render() {
        const {x, y} = this.state;
        return <div onMouseMove={this.handleMouseMove} style={{ height: '100vh' }}>
            <div>当前鼠标位置是:{x},{y}</div>
            {this.props.render(this.state)}
        </div>
    }
}
export default MouseTracker