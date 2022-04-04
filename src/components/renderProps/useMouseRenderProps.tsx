import React from 'react';
import MouseTracker from './mouse'

const Cat = ({x = 100, y = 200}: {x?: number, y?: number}) => {
    return <div style={{position: 'absolute', left: x, top: y}}>i am cat</div>
}
class useMouseTracker extends React.Component {
    render() {
        return <MouseTracker render={(position) => <Cat {...position}></Cat>}></MouseTracker>
    }
}
export default useMouseTracker