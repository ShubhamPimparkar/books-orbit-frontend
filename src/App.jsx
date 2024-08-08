import './App.css'
import { Outlet} from 'react-router-dom'
import NavbarComp from './Components/NavbarComp'
function App() {
 
  return (
    <>
    <NavbarComp></NavbarComp>
    <Outlet/>
    </>
  )
}

export default App
