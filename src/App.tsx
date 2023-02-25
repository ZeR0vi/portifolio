import './styles/main.scss'

import { Header } from "./components/Header"
import { Main } from './components/Main'
import { Footer } from './components/Footer'


export function App() {
  
  return (
    <div className="container">

      <Header/>
      <Main/>
      

      <Footer/>
    
    </div>
  )
}


