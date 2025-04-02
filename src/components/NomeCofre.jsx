

export default ({nome, descricao, valor}, ...props) => {
    return(
        <div>
            <h1>{nome}</h1>
            <p>{descricao}</p>
            <h5>R$: {valor}</h5>
        </div>
    )
}