

export default ({nome , descricao, valor}) => {

    const setNome = e => {
        nome(e.target.value)
    }

    const setDescricao = e => {
        descricao(e.target.value)
    }

    const setValor = e => {
        valor(e.target.value)
    }

    return(
        <div>
            <input type="text"
            onChange={setNome}
            placeholder="Digite o nome do cofre" />

            <input type="text"
            onChange={setDescricao}
            placeholder="Digite a descrição do cofre" />

            <input type="text"
            onChange={setValor}
            placeholder="Digite o nome do cofre" />
        </div>
    )
}