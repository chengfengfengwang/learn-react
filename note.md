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