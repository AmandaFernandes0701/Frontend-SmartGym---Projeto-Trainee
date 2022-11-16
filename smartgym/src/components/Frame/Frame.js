import { React, api, useEffect, useState } from "react";
import { getById } from "../../../../../BackEnd-SmartGym/src/models/user";
import "./Frame.css";

function Frame({frame, exercicio, props}) { /*E ESSE FRAME ?????*/

    const [exerciciosUsuario, setExerciciosUsuario] = useState([]);
    const [exercicioSelecionado, setExercicioSelecionado] = useState(false)
    const [exercicioOficial, setExercicioOficial] = useState({})
    const user_id = getById();
    console.log(user_id)

    async function getExercicioPerfil(){
        if (!props) {
            try {
                const response = await api.get(`/exercicio/${exercicio.exercicio_id}`);
                setExercicioOficial(response.data)
            } catch (error) {
                console.warn(error);
                alert(error.message);
            }   
        }
        else{
            setExercicioOficial(exercicio)
        }
        
    }

    async function getExerciciosUsuario() {
        try {
            const response = await api.get(`/exerciciouser/${user_id}`);
            setExerciciosUsuario(response.data);
        } catch (error) {
            console.warn(error);
            
        }
    }

    async function verificandoSelecionado() {
         exerciciosUsuario.forEach((exercicioUsuario)=>{
             if (exercicioUsuario.exercicio_id === exercicio.exercicio_id ) {
                 setExercicioSelecionado(true)
             }
         }

        )
    }

    async function postExercicioUser() {
        const exercicio_id = exercicio.exercicio_id
        try {
            const response = await api.post(`/exerciciouser`,{
                user_id,
                exercicio_id
            });
            window.location.href="/exercicios"
            return response;
        } catch (error) {
            console.warn(error);
            alert(error.message);
        }
    }

    async function deleteExercicioUser() {
        const exercicio_id = exercicio.exercicio_id
        try {
            const response = await api.delete(`/exerciciouser/${exercicio_id}/${user_id}`);
            window.location.href="/exercicios"
            return response;
        } catch (error) {
            console.warn(error);
            alert(error.message);
        }
    }

    useEffect( ()=>{
        getExercicioPerfil();
        getExerciciosUsuario();
    },[])

    useEffect( ()=>{
        verificandoSelecionado();
    },[exerciciosUsuario])

    return ( 

            <div className="frame">
            
            <div alt="exerc" className="frameImage" >{frame.image}</div>
            <div className="frameText">
                <div className="frameTitle">{frame.title}</div>
                <div className="frameDescription">{frame.description}</div>
                <button className="frameButton" onClick={()=> {postExercicioUser()}} id="">{frame.button}Adicionar</button>
            </div>
        </div>
    );
}

export default Frame;