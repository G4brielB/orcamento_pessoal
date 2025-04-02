import { useState } from "react"
import "../styles/CriarCofre.css"

import InputCofre from "./InputCofre"
import NomeCofre from "./NomeCofre"

export default props => {

   /* const [mostrarModal, setMostrarModal] = useState(false)
    
    const estaMostrando = () => {
        setMostrarModal(true)
    }
    
    const naoMostrar = () => {
        setMostrarModal(false)
    }
        <h1>Criar Cofre</h1>
            <div className="criar-cofre">
                <button onClick={estaMostrando} className="circulo">
                    +
                </button>
                
            </div>
    */

            const [cofreNome, setCofreNome] = useState('')
            const [cofreDescricao, setCofreDescricao] = useState('')
            const [cofreValor, setCofreValor] = useState('')


    return(
        <div className="cofre">
            <InputCofre nome={setCofreNome} descricao={setCofreDescricao} valor={setCofreValor}/>
            <NomeCofre nome={cofreNome} descricao={cofreDescricao} valor={cofreValor}/>
        </div>
    )
}