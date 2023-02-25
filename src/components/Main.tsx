import TypeIt, { TypeItProps } from "typeit-react"

import { ArrowFatLineDown } from 'phosphor-react'

import { Skills } from '../components/Skills'

import '../styles/main.scss'

export function Main() {
      return(
            <main>

            <div className="type"> 
            <div>
             <TypeIt className="title"
             options={{loop: true}}
             getBeforeInit = { (instance: TypeItProps) => {
               instance.type("Hello, I'm David Lorenzo").pause(1500)
               .delete(24).
               type("I'm programmer Full Stack!").
               pause(1500)
               .delete(26)
               .type("I'm 16 years!")
               .pause(1500)
     
               return instance
             }}
             
             />
             </div>

             </div>
             <div className="b">     
               <button type="button" className="know"> <ArrowFatLineDown className="arrowDown"/> Know Me</button>
             </div>

             <Skills/>

           </main>
      )
}