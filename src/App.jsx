import './App.css'
import { Outlet} from 'react-router-dom'
import NavbarComp from './Components/NavbarComp'
import FooterComp from './Components/FooterComp'
function App() {
 
  return (
    <>
    <NavbarComp></NavbarComp>
    <Outlet/>
    <FooterComp></FooterComp>
    </>
  )
}

export default App
