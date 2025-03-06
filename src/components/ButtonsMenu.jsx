import "../styles/ButtonMenu.css"
import Button from "./Button"

export default props => {

    

    return(
        <div className="buttons-menu">
            <Button active>Inicio</Button>
            <Button>Cofres</Button>
            <Button>Carteira</Button>
            <Button>Conta</Button>
            <Button>Sobre</Button>
        </div>
    )
}