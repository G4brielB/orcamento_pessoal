import "../styles/Inicio.css"
import { useState } from "react"
import Activity from "./Atividades"
import InfoUsers from "./user.js"


export default props => {


    return (
        <div>
            <header>
                <h1 className="title">Inicio</h1>
            </header>
            <section>
                <div className="saldo-area">
                    <p><span className="cifrao">$</span>aldo:</p>
                    <div className="saldo">{InfoUsers.saldo}</div>
                </div>

                <h1>Atividade</h1>
                <div className="activity-area">
                    <Activity />
                </div>

                <aside></aside>
            </section>
        </div>
    )
}