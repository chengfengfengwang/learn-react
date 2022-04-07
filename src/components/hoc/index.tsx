import windowWidth from './windowWidth';

const foo = ({width, height}:{width: number, height: number}) => {
    return <h1>x: {width} y:{height}</h1>
}
const bar = ({width, height}:{width: number, height: number}) => {
    return <h2>x: {width} y:{height}</h2>
}
const WithFoo = windowWidth(foo);
const WithBar = windowWidth(bar);
const widthWidth = () => {
    return <div>
        {/* {windowWidth(foo)}
        {windowWidth(bar)} */}
        <WithFoo />
        <WithBar />
    </div>
}

export default widthWidth