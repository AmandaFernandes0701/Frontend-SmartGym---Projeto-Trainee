import { appBarClasses } from "@mui/material";
import {React, useState, useEffect } from "react";
import api from "../../services/api";
import { getID } from "../../services/auth";
import { BsAppIndicator } from "react-icons/bs";
import ExerciciosSelecionados from "../../components/ExerciciosSelecionados";
import "./Perfil.css";


    const [exerciciosUsuario, setExerciciosUsuario] = useState([]);
    const [dadosUsuario, setDadosUsuario] = useState([]); 
    const user_id = getID();
    
    async function getExerciciosUsuario(){
        try {
            const response = await api.get(`/relation/${user_id}`);
            setExerciciosUsuario(response.data.result);
        }
        catch(error){
            console.warn(error);
            alert(error.mesage);
        }
    }

    async function getDadosUsuario() {
        try {
            const response = await api.get(`/users/${user_id}`);
        
            setDadosUsuario(response.data);
        } catch (error) {
            console.warn(error);
            alert(error.message);
        }
    }
    
    // function handleChange(e){
    //     console.log(e);
    //     const {nome, value} = e.target;
    //     return setDadosUsuario({...dadosUsuario, [nome]:value})
    // }

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
                        <p className="input-nome-perfil"
                    
                    >{dadosUsuario.nome}</p>

                    </div>

                    <div className="bloco2-perfil">
                        <p className="text-telefone-perfil">Telefone</p>
                        <input className="input-telefone-perfil"
                        
                    />
                    </div>


                </div>


                <div className="linha2text-perfil">
                    <div className="bloco3-perfil">
                        <p className="text-cpf-perfil">CPF</p>
                        <input className="input-cpf-perfil"
                        type="text"
                        name='cpf'
                        />
                    </div>
                    
                    <div className="bloco4-perfil">
                        <p className="text-idade-perfil">Idade</p>
                        <input className="input-idade-perfil"
                        type="text"
                        name='idade'
                        />
                    </div>

                    <div className="bloco5-perfil">
                        <p className="text-sexo-perfil">Sexo</p>
                        <input className="input-sexo-perfil"
                        type="text"
                        name='sexo'
                        />
                    </div>
                </div>

                <div className="linha3text-perfil">
                    <div className="bloco6-perfil">
                        <p className="text-cidade-perfil">Cidade/Estado</p>
                        <input className="input-cidade-perfil"
                        type="text"
                        name='cidade'
                        />

                    </div>
                    <div className="bloco7-perfil">
                        <p className="text-endereco-perfil">Endereço</p>
                        <input className="input-endereco-perfil"
                        type="text"
                        name='endereco'
                        />
                    </div>

                </div>

                <div className="linha4text-perfil">
                    <div className="bloco8-perfil">
                    <p className="text-email-perfil">E-mail</p>
                    <input className="input-email-perfil"
                    type="text"
                    name='email'
                    />
                    </div>

                </div>


                <div className="linha5text-perfil">
                    <div className="bloco9-perfil">
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

                <div className="container-dos-selecionados">
                    
                        {exerciciosUsuario.map((exercicio)=> (
                            <div className="exercicio_perfil">
                                    <ExerciciosSelecionados key={exercicio.exercicio_id} exercicio={exercicio} />
                            </div>
                            ))}

                </div>

        </div>

        </div>
    );
}
export default Perfil;
