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

                <div className="linha1text-perfil">

                    <div className="bloco1">
                        <p className="text-nome-perfil">Nome</p>
                        <input className="input-nome-perfil"
                        type="text"
                        name='nome'
                    />
                    </div>

                    <div className="bloco2">
                        <p className="text-telefone-perfil">Telefone</p>
                        <input className="input-telefone-perfil"
                        type="text"
                        name='telefone'
                    />
                    </div>

        
                </div>


                <div className="linha2text-perfil">
                    <div className="bloco3">
                        <p className="text-cpf-perfil">CPF</p>
                        <input className="input-cpf-perfil"
                        type="text"
                        name='cpf'
                        />
                    </div>
                    
                    <div className="bloco4">
                        <p className="text-idade-perfil">Idade</p>
                        <input className="input-idade-perfil"
                        type="text"
                        name='idade' 
                        />
                    </div>

                    <div className="bloco5">
                        <p className="text-sexo-perfil">Sexo</p>
                        <input className="input-sexo-perfil"
                        type="text"
                        name='sexo'
                        />
                    </div>

                </div>

                <div className="linha3text-perfil">
                    <div className="bloco6">
                        <p className="text-cidade-perfil">Cidade/Estado</p>
                        <input className="input-cidade-perfil"
                        type="text"
                        name='cidade'
                        />
                    
                    </div>
                    <div className="bloco7">
                        <p className="text-endereco-perfil">Endereço</p>
                        <input className="input-endereco-perfil"
                        type="text"
                        name='endereco' 
                        />
                    </div>

                </div>

                <div className="linha4text-perfil">
                    <div className="bloco8">
                    <p className="text-email-perfil">E-mail</p>
                    <input className="input-email-perfil"
                    type="text"
                    name='email'
                    />
                    </div>
                    
                </div>


                <div className="linha5text-perfil">
                    <div className="bloco9">
                        <p className="text-senha-perfil">Senha</p>
                        <input className="input-senha-perfil"
                        type="password"
                        name='senha'
                        />
                    </div>
                </div>

            </div>

            <div className="container-exercicios">
            
                <div className="Titulo-perfil">
                    Exercícios em andamento
                </div>

                <div className="linha1-perfil">
                    <div className="grupo1-perfil">
                            <div className="Label-da-imagem">
                            Flexão
                            </div>
                            {/* <img>
                            
                            </img> */}

                    </div>
                    <div className="grupo2-perfil">
                            <div className="Label-da-imagem">
                            Leg Press
                            </div>
                            {/* <img>
                            
                            </img> */}
                    </div>
                </div>
                <div className="linha2-perfil">
                    <div className="grupo3-perfil">
                    <div className="Label-da-imagem">
                            Caixa extensora
                            </div>
                            {/* <img>
                            
                            </img> */}
                    </div>  
                    <div className="grupo4-perfil">
                    <div className="Label-da-imagem">
                            Agachamento livre
                            </div>
                            {/* <img>
                            
                            </img> */}
                    </div>
                </div>
                    <div className="linha3-perfil">
                        <div className="grupo5-perfil">
                        <div className="Label-da-imagem">
                        Extensão tríceps

                                </div>
                                {/* <img>
                                </img> */}
                        </div>
                        <div className="grupo6-perfil">
                        <div className="Label-da-imagem">
                                Quadríceps e coluna
                                </div>

                        </div>
                </div>

        </div>

    </div>
    );
}
export default Perfil;
