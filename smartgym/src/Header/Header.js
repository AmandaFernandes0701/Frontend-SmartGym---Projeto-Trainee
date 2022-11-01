import React from "react";
import "./Header.css"
import Logo from "./logo_icon.png"

function Header() {

    return (
        <div className="container_header" >
        <div className="caixa_header">
            <div className="caixa_logo_titulo_header">
            <div className="imagem_logo">
                <img src={Logo}/>
            </div>            
            <div className="texto_logo_titulo">
                <h3>Smart Gym</h3> 
            </div> 
            </div>
            <button className="botao_header">&#9776;</button>
            <ul className="botoes_menu">
                <a href="/Home">
                    <li className="itens_lista_header">
                        <h1 className="palavras_lista_header">Home</h1>
                    </li>
                </a>
                <a href="/Perfil">
                    <li className="itens_lista_header">
                        <h1 className="palavras_lista_header">Perfil</h1>
                    </li>
                </a>
                <a href="/Cadastro">
                    <li className="itens_lista_header">
                        <h1 className="palavras_lista_header">Cadastro</h1>
                    </li>
                </a>
                <a href="/Exercícios">
                    <li className="itens_lista_header">
                        <h1 className="palavras_lista_header">Exercícios</h1>
                    </li>
                </a>
                <a href="/Login">
                    <li className="itens_lista_header">
                        <h1 className="palavras_lista_header">Login</h1>
                    </li>
                </a>
            </ul>

            </div>
        </div>
    )
    
}
export default Header;