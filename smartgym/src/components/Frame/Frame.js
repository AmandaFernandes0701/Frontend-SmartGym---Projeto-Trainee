import React, { useState } from "react";
import api from "../../services/api";
import "./Frame.css";

function Frame({frame}) {

    function adicionando(e){
        e.preventDefault();
        const user_id = sessionStorage.getItem('user_id');
        api.post('/relation', {user_id, id_exercicio: frame.id_exercicio});
    }

    return ( 
        <div className="frame">
            <div className="frameImage"><img style={{ width: "100%", height: "100%" }} src={frame.imagem} className="cerrote" alt=""/></div>
            <div className="frameText">
                <div className="frameTitle">{frame.titulo}</div>
                <div className="frameDescription">{frame.descricao}</div>
                <button className="frameButton"onClick={adicionando}>Adicionar</button>
            </div>
        </div>
    );
}

export default Frame;

