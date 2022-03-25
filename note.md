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