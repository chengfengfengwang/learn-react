import { useState } from 'react';
import './App.css';
import MyTable from './MyTable';

const dataSource = [
  {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
  },
  {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
  },
];
function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false)
  }, 1000);
  return (
    <div>
      <MyTable tableTitle='hello world' loading={loading} dataSource={dataSource} />
    </div>
  );
}

export default App;
