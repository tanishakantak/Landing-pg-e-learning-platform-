
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Card from './Components/Card'
import Footer from './Components/Footer'

function App() {
  
  return (
    <div className="min-w-100%">
    <div className=' bg-gradient-to-tr from-[#6ba7e8]
    via-[#0e0161] to-[#370063] px-8 md:px-14 lg:px-36 pb-10 pt-10'>
        <Header/>
        <Hero/>
        <About/>
        <Card/>
        <Footer/>
        
    </div>
    </div>
  )
}

export default App