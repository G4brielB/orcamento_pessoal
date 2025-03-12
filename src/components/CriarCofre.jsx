import { useState } from "react"
import "../styles/CriarCofre.css"
import ModalCriarCofre from "./ModalCriarCofre"


export default props => {

    const [mostrarModal, setMostrarModal] = useState(false)
    
    const estaMostrando = () => {
        setMostrarModal(true)
    }
    
    const naoMostrar = () => {
        setMostrarModal(false)
    }
    



    return(
        <div className="cofre">
            <h1>Criar Cofre</h1>
            <div className="criar-cofre">
                <button onClick={estaMostrando} className="circulo">
                    +
                </button>
                
            </div>
            <ModalCriarCofre mostrar={mostrarModal} naoMostrar={naoMostrar} />
        </div>
    )
}