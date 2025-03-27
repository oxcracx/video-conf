import './App.css'
import { Navbar } from './components/Navbar'
import { Banner } from './components/Banner'
import { ScrollSection } from "./components/ScrollSection";

function App() {


  return (
  <div className='max-w-screen-2xl container px-4 mx-auto'>
    <Navbar/>
    <Banner/>
    <ScrollSection />
  </div>
  )
}

export default App
