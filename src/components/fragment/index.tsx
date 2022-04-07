import React from "react";

const Fn = () => {
    const list = ['a', 'b', 'c'];
    // const listComponent = list.map((item) => <div>item</div>)
    return <>
        <div>1</div>
        <div>2</div>
        {/* {listComponent} */}
        {
            list.map((item) => {
                return <React.Fragment key={item}>
                    <span>item: </span>
                    <span>{item}</span>
                </React.Fragment>
            })
        }
    </>
}
export default Fn