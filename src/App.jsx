
import './css/App.css'
import { useMyContext } from './Components/MyContext'
import StartScreen from './Components/StartScreen'
import Home from './Components/Home'
import Menu from './Components/Menu'
function App() {
const { activeIndex} = useMyContext()

  return (
    <>
   { activeIndex === 0 &&  <StartScreen/>}
{ activeIndex === 1 &&  <Home/>}
{ activeIndex === 2 && <Menu/>}
    </>
  )
}

export default App
