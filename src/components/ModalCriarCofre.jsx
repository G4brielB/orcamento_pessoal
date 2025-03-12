import { use, useState } from "react";
import CriarCofre from "./CriarCofre";


export default ({mostrar, naoMostrar}) => {
    
    const [nomeCofreInput, setNomeCofreInput] = useState('')
    const [descricaoCofre, setDescricaoCofre] = useState('')

    const eventoMudancaNome = (e) => {
        setNomeCofreInput(e.target.value)
    }

    const eventoMudancaDescricao = (e) => {
        setDescricaoCofre(e.target.value)
    }
    
    const nomeCofre = () => nomeCofreInput
    const descricao = () => descricaoCofre

    console.log(`nome: ${nomeCofreInput} descrição: ${descricaoCofre}`)
    
    if (!mostrar){
        return null;
    }else{
    return(
        <div className="janela-voadora">
                <div className="janela">
                    <img src="https://imgs.search.brave.com/gXR6DACRBY3iENARw_4K5uQGlIte1Qp8KOuGF-3rOV4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFkcHhzSkowZ0wu/anBn" alt="Cofre-image" />
                    <label>Nome do cofre: <br />
                        <input type="text"
                            value={nomeCofreInput}
                            onChange={eventoMudancaNome}
                        />
                    </label>
                    <label>Descrição: <br />
                        <input type="text"
                            value={descricaoCofre}
                            onChange={eventoMudancaDescricao}
                        />
                    </label>
                    <div className="buttons">
                        <button onClick={naoMostrar}>Fechar</button>
                        <button onClick={naoMostrar}>Enviar</button>
                    </div>
                </div>
            </div>
    )}
}