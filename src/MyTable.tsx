import { Table, TableProps } from "antd";
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
    return <div>
        <h1>{tableTitle}</h1>
        <Table {...props}  columns={columns} />
    </div>
}
export default table