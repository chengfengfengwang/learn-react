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