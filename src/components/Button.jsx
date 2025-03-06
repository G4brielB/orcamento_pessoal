import "../styles/ButtonMenu.css"

export default ({active, ...props}) => {

    const buttonClass = `button ${active ? 'active' : ''}`

    return(
        <div className="button-area">
            <button className={buttonClass} href="#">{props.children}</button>
        </div>
    )
}