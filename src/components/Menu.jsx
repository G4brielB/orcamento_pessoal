import "../styles/Menu.css"
import { useState } from "react"
import ButtonsMenu from "./ButtonsMenu"
import Inicio from "./Inicio"



export default props => {

    const [userName, setUserName] = useState('Gabriel')
    const [userMail, setUserMail] = useState('gabrieldecarvalhofxb@gmail.com')

    
    console.log(userName)
    return(
    <div className="menu">
        <div className="perfil">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" alt="perfil-image" width={'80px'} />
            <p>{userName}</p>
            <p>{userMail}</p>
            <ButtonsMenu />
        </div>
        <div className="interface-margin">
            <div className="interface">
                <Inicio />
            </div>
        </div>
    </div>
    )
}