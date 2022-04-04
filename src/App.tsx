import './App.css';
import TestState from './components/testState';
import TestRefs from './components/testRefs';
import UseMytable from './components/MyTable/UseMytable';
import RenderProps from './components/renderProps/useMouseRenderProps'
function App() {
  return (
    <div>
      {/* <UseMytable />
      <TestState /> 
      <TestRefs /> */}
      <RenderProps />
    </div>
  );
}

export default App;
