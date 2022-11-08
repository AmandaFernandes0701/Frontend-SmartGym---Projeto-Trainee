import React from "react";
import "./Perfil.css";

function Perfil(){
    return (
        <div className="body">
            <div className="marcador-pag" >
                <div className="marcador-pagina-anterior">
                    HOME |
                </div>

                <div className="perfil-do-user">
                    PERFIL DO USUÁRIO
                </div>
                
            </div>
            
        <div className="container-dados1">

                <div className="linha1text">

                    <p className="textNome">Nome</p>
                    <div className="textTelefone">Telefone</div>

                </div>

                <div className="linha1">
                    <input className="inputNome"
                    type="text"
                    name='nome'
                    />
                    <input className="inputTelefone"
                    type="text"
                    name='telefone' 
                    />   

                </div>

                <div className="linha2text">

                    <p className="textCPF">CPF</p>
                    <p className="textIdade">Idade</p>
                    <p className="textSexo">Sexo</p>
                </div>

                <div className="linha2">
                    <input className="inputCPF"
                    type="text"
                    name='cpf'
                    />
                    <input className="inputIdade"
                    type="text"
                    name='idade' 
                    />
                    <input className="inputSexo"
                    type="text"
                    name='sexo'
                    />
                </div>

                <div className="linha3text">

                    <p className="textNome">Cidade/Estado</p>
                    <p className="textTelefone">Endereço</p>

                </div>

                <div className="linha3">
                    <input className="inputCidade"
                    type="text"
                    name='cidade'
                    />
                    <input className="inputEndereco"
                    type="text"
                    name='endereco' 
                    />   
                </div>

                <div className="linha4text">
                    <p className="textNome">E-mail</p>
                </div>

                <div className="linha4">
                    <input className="inputEmail"
                    type="text"
                    name='email'
                    />
                </div>

                <div className="linha5text">
                    <p className="textNome">Senha</p>
                </div>

                <div className="linha5">
                    <input className="inputSenha"
                    type="password"
                    name='senha'
                    />
                </div>

        </div>

        <div className="container-exercicios">
            Container
        </div>

    </div>
    );
}
export default Perfil;