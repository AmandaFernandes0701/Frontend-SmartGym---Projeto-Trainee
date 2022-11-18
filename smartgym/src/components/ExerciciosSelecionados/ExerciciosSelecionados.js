import React from "react";
import "./ExerciciosSelecionados.css";

function ExerciciosSelecionados({exercicio}) {
    console.log(exercicio);
    return ( 
        <div className="frame-perfil">
            <div className="frameImage-perfil"><img style={{ width: "50%", height: "50%" }} src={exercicio.imagem} className="imagem-exercicio-perfil" alt=""/></div>
            <div className="frameText">
                <div className="frameTitle-perfil">{exercicio.titulo}</div>
            </div>
        </div>
    );
}

export default ExerciciosSelecionados;