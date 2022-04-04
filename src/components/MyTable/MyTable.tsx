import { Table, TableProps } from "antd";
import React from "react";
interface Project {
    name: string,
    age: number,
    key: string,
    address: string
}
interface listProps extends TableProps<Project> {
    tableTitle: string
}

const table = ({tableTitle, ...props}: listProps) => {
    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    function handleClick(e: React.MouseEvent) {
        console.log('click----', e.currentTarget) // react合成事件
        console.log('click----', e.nativeEvent.currentTarget) // 原生事件，在#root上绑定usecapture
    }
    return <div>
        <h1 onClick={handleClick}>{tableTitle}</h1>
        <Table {...props}  columns={columns} />
    </div>
}
export default table