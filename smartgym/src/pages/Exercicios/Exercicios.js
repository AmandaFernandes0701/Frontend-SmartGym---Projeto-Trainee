import React from "react";
import Frame from "../../components/Frame";
import './Exercicios.css'
import api from "../../services/api";
import { useEffect, useState } from "react";

// function Exercicios(){

//     // const [exercicios, setExercicios] = useState([]);

//     // async function getExercicios(){
//     //     try {
//     //         const response = await api.get(`/relation/${user_id}`);
//     //         setExercicios(response.data.result);
//     //     }
//     //     catch(error){
//     //         console.warn(error);
//     //         alert(error.mesage);
//     //     }
//     // }

    function Exercicios(){ 

        const [exercicios, setExercicios] = useState([]);
    
        useEffect(()=>{
            api.get('/exercise').then((res)=>{
                console.log(res.data);
                setExercicios(res.data)
            });
        }, []);

    return (
        <div className="bodyExercicios">

            <div className="titleExercicios">
                <p>Exercícios</p>
            </div>
            
            <div className="frameContainer">
                {exercicios.map((frame) => (
                    <Frame key={frame.id_exercicio} frame={frame} />
            ))} 
        
            </div>
            
        </div>

        

    );
}
export default Exercicios;