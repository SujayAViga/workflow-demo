import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Workflow from './components/Workflow'
import CodeViewer from './components/CodeViewer'
// import workflowData from './components/workflow.json'
import { GlobalContext } from './GlobalContainer'

function App() {
  const {workflowData} = useContext(GlobalContext);
  const [count, setCount] = useState(0)
  
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '0 0 80%' }}>
        <Workflow />
      </div>
      <div style={{ flex: '0 0 20%' }}>
        <CodeViewer initialCode={JSON.stringify(workflowData)} />
      </div>
    </div>
  )
}

export default App
