import './App.css'
import { Outlet} from 'react-router-dom'
function App() {
 
  return (
    <>
    <h1>Books Orbit</h1>
    <Outlet/>
    </>
  )
}

export default App
