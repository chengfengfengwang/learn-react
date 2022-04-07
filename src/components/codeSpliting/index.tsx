import React, { Suspense } from "react"

// import Fn from './commonComponent'; 
// 打包后commonComponent会被分割成一个单独的component文件，异步加载
const DynamicComponent = React.lazy(() => import('./commonComponent'))

const CodeSpliting = () => {
    return <Suspense fallback={<div>Loading...</div>}>
        <DynamicComponent />
    </Suspense>
}
export default CodeSpliting