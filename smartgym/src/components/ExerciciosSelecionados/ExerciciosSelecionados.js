import React from "react";
import "./ExerciciosSelecionados.css";

function ExerciciosSelecionados({exercicio}) {
    console.log(exercicio);
    return ( 
        <div className="frame">
            <div className="frameImage"><img style={{ width: "100%", height: "100%" }} src={exercicio.imagem} className="cerrote" alt=""/></div>
            <div className="frameText">
                <div className="frameTitle">{exercicio.titulo}</div>
            </div>
        </div>
    );
}

export default ExerciciosSelecionados;