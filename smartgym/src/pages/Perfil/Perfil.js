import { appBarClasses } from "@mui/material";
import {React, useState, useEffect } from "react";
import api  from "../../services/api"
import { BsAppIndicator } from "react-icons/bs";
import {getById} from "../../services/auth"
import Frame from "../../components/Frame";
import "./Perfil.css";

function Perfil(){

    const [exerciciosUsuario, setExerciciosUsuario] = useState([])
    const [dadosUsuario, setDadosUsuario] = useState([]); 
    const user_id = getById();
    
   
    async function getExerciciosUsuario(){
        try {
            const response = await api.get(`/exerciciouser/${user_id}`);
            setExerciciosUsuario(response.data);
        }
        
        catch(error){
            console.warn(error);
            alert(error.mesage);
        }

    }

    async function getDadosUsuario() {
        try {
            const response = await api.get(`/users/${user_id}`);
            console.log(response);
            setDadosUsuario(response.data);
        } catch (error) {
            console.warn(error);
            alert(error.message);
        }
    }
    
    function handleChange(e){
        console.log(e);
        const {nome, value} = e.target;
        return setDadosUsuario({...dadosUsuario, [nome]:value})
    }

    useEffect( ()=>{
        getExerciciosUsuario();
        getDadosUsuario();
    },[])


    return (
        <div className="container-do-perfil-generico">
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

                    <div className="bloco1-perfil">
                        <p className="text-nome-perfil">Nome</p>
                        <input className="input-nome-perfil"
                        type="text"
                        name='nome'
                        onChange={handleChange}
                    />
                    </div>

                    <div className="bloco2-perfil">
                        <p className="text-telefone-perfil">Telefone</p>
                        <input className="input-telefone-perfil"
                        type="text"
                        name='telefone'
                        onChange={handleChange}
                    />
                    </div>

        
                </div>


                <div className="linha2text-perfil">
                    <div className="bloco3-perfil">
                        <p className="text-cpf-perfil">CPF</p>
                        <input className="input-cpf-perfil"
                        type="text"
                        name='cpf'
                        onChange={handleChange}
                        />
                    </div>
                    
                    <div className="bloco4-perfil">
                        <p className="text-idade-perfil">Idade</p>
                        <input className="input-idade-perfil"
                        type="text"
                        name='idade'
                        onChange={handleChange}
                        />
                    </div>

                    <div className="bloco5-perfil">
                        <p className="text-sexo-perfil">Sexo</p>
                        <input className="input-sexo-perfil"
                        type="text"
                        name='sexo'
                        onChange={handleChange}
                        />
                    </div>

                </div>

                <div className="linha3text-perfil">
                    <div className="bloco6-perfil">
                        <p className="text-cidade-perfil">Cidade/Estado</p>
                        <input className="input-cidade-perfil"
                        type="text"
                        name='cidade'
                        onChange={handleChange}
                        />
                    
                    </div>
                    <div className="bloco7-perfil">
                        <p className="text-endereco-perfil">Endereço</p>
                        <input className="input-endereco-perfil"
                        type="text"
                        name='endereco'
                        onChange={handleChange} 
                        />
                    </div>

                </div>

                <div className="linha4text-perfil">
                    <div className="bloco8-perfil">
                    <p className="text-email-perfil">E-mail</p>
                    <input className="input-email-perfil"
                    type="text"
                    name='email'
                    onChange={handleChange}
                    />
                    </div>
                    
                </div>


                <div className="linha5text-perfil">
                    <div className="bloco9-perfil">
                        <p className="text-senha-perfil">Senha</p>
                        <input className="input-senha-perfil"
                        type="password"
                        name='senha'
                        onChange={handleChange}
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

                        {exerciciosUsuario.map((exercicio)=> (
                            <div className="exercicio_perfil">
                                    <Frame key={exercicio.exercicio_id} exercicio={exercicio} />
                            </div>
                            ))}

                            {/* <div className="Label-da-imagem">
                            Flexão
                            </div> */}
                            {/* <img>
                            
                            </img> */}

                    </div>
                    <div className="grupo2-perfil">

                        {exerciciosUsuario.map((exercicio)=> (
                            <div className="exercicio_perfil">
                                    <Frame key={exerciciosUsuario.exercicio_id} exercicio={exercicio} />
                            </div>
                            ))}
                            
                            {/* <div className="Label-da-imagem">
                            Leg Press
                            </div> */}
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