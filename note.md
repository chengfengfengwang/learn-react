# react event type
给事件处理函数指定参数类型
```
function handleClick(e: React.MouseEvent) {
    console.log('click----', e)
}
return <div>
    <h1 onClick={handleClick}>{tableTitle}</h1>
    <Table {...props}  columns={columns} />
</div>
```
# react function component type
函数返回类型是 JSX.Element
```
export type CatFn = ({ x, y }: {x?: number, y?: number}) => JSX.Element
const Cat: CatFn =  ({x, y}) => <div style={{position: 'absolute', left: x, top: y}}>i am cat</div>;
```
https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/
# state type
给state定义type 默认为{}
https://stackoverflow.com/questions/47561848/property-value-does-not-exist-on-type-readonly

# state 注意事项
1. state可能是异步的
```
this.setState({
    age: 1
})
console.log(this.state.age) // 有可能不是1
```
```
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
```
2. 不要直接更改state
```
// Wrong
this.state.comment = 'Hello';
```
3. state会自动合并
# Object is possibly 'null'
this.input.current.value // 报错this.input.current 可能为null
this.input.current?.value // 解决