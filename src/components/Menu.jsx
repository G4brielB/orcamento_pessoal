import "../styles/Menu.css"
import { useState } from "react"
import ButtonsMenu from "./ButtonsMenu"
import Inicio from "./Inicio"
import Cofre from "./CriarCofre.jsx"
import InfoUsers from "./user.js"


export default props => {

    return(
    <div className="menu">
        <div className="perfil">
            <img src={InfoUsers.imgUser} alt="perfil-image" width={'80px'} />
            <p>{InfoUsers.user}</p>
            <p>{InfoUsers.email}</p>
            <ButtonsMenu />
        </div>
        <div className="interface-margin">
            <div className="interface">
                <Cofre />
            </div>
        </div>
    </div>
    )
}