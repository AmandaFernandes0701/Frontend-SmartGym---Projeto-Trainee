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

                    <div className="bloco1">
                        <p className="textNome">Nome</p>
                        <input className="inputNome"
                        type="text"
                        name='nome'
                    />
                    </div>

                    <div className="bloco2">
                        <p className="textTelefone">Telefone</p>
                        <input className="inputTelefone"
                        type="text"
                        name='telefone'
                    />
                    </div>

        
                </div>


                <div className="linha2text">
                    <div className="bloco3">
                        <p className="textCPF">CPF</p>
                        <input className="inputCPF"
                        type="text"
                        name='cpf'
                        />
                    </div>
                    
                    <div className="bloco4">
                        <p className="textIdade">Idade</p>
                        <input className="inputIdade"
                        type="text"
                        name='idade' 
                        />
                    </div>

                    <div className="bloco5">
                        <p className="textSexo">Sexo</p>
                        <input className="inputSexo"
                        type="text"
                        name='sexo'
                        />
                    </div>

                </div>

                <div className="linha3text">
                    <div className="bloco6">
                        <p className="textCidade">Cidade/Estado</p>
                        <input className="inputCidade"
                        type="text"
                        name='cidade'
                        />
                    
                    </div>
                    <div className="bloco7">
                        <p className="textEndereco">Endereço</p>
                        <input className="inputEndereco"
                        type="text"
                        name='endereco' 
                        />
                    </div>

                </div>

                <div className="linha4text">
                    <div className="bloco8">
                    <p className="textEmail">E-mail</p>
                    <input className="inputEmail"
                    type="text"
                    name='email'
                    />
                    </div>
                    
                </div>


                <div className="linha5text">
                    <div className="bloco9">
                        <p className="textSenha">Senha</p>
                        <input className="inputSenha"
                        type="password"
                        name='senha'
                        />
                    </div>
                </div>

        </div>

        <div className="container-exercicios">
            Container
        </div>

    </div>
    );
}
export default Perfil;