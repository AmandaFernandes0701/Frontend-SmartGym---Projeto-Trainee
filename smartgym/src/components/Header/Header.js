import React from "react";
import "./Header.css"
import Menu_Sanduiche from "../Menu_Sanduiche"
import Logo from "./logo_icon.png"

function Header() {

    return (
        <div className="container_header" >
            <div className="caixa_header">
                <div className="caixa_logo_titulo_header">
                    <div className="Logo_Smart_Gym">
                        <img src={Logo} />
                    </div>
                    <div className="texto_titulo_Smart_Gym">
                        <h3>Smart Gym</h3>
                    </div>
                </div>
                <ul className="botoes_menu">
                    <a href="/home">
                        <li className="itens_lista_header">
                            <h1 className="palavras_lista_header">Home</h1>
                        </li>
                    </a>
                    <a href="/perfil">
                        <li className="itens_lista_header">
                            <h1 className="palavras_lista_header">Perfil</h1>
                        </li>
                    </a>
                    <a href="/cadastro">
                        <li className="itens_lista_header">
                            <h1 className="palavras_lista_header">Cadastro</h1>
                        </li>
                    </a>
                    <a href="/exercicios">
                        <li className="itens_lista_header">
                            <h1 className="palavras_lista_header">Exercícios</h1>
                        </li>
                    </a>
                    <a href="/login">
                        <li className="itens_lista_header">
                            <h1 className="palavras_lista_header">Login</h1>
                        </li>
                    </a>
                </ul>
                <div className="Menu_Sanduiche">
                <Menu_Sanduiche />
            </div>
            </div>
        </div>
    )

}
export default Header;