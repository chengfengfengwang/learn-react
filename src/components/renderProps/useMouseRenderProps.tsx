import React from 'react';
import MouseTracker from './mouse'
export type CatFn = ({ x, y }: {x?: number, y?: number}) => JSX.Element
const Cat: CatFn =  ({x, y}) => <div style={{position: 'absolute', left: x, top: y}}>i am cat</div>;

// const Cat:(param: {x?: number, y?: number}): Element = ({x = 100, y = 200}) => {
//     return <div style={{position: 'absolute', left: x, top: y}}>i am cat</div>
// }
class useMouseTracker extends React.Component {
    render() {
        return <MouseTracker render={(position) => <Cat {...position}></Cat>}></MouseTracker>
    }
}
export default useMouseTracker