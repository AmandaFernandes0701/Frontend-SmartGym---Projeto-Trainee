import React from "react";
import "./Frame.css";
import { getID } from "../../services/auth";
import api from "../../services/api";

function Frame({frame}) {

    function adicionando(e){


        e.preventDefault();

        try{
            const user_id = getID();
        api.post('/relation', {user_id, id_exercicio: frame.id_exercicio});
        alert("Exercício adicionado com sucesso");
        }
        catch (error){
            console.log(error.message);
        }
    }

    return ( 
        <div className="frame">
            <div className="frameImage">{frame.image}</div>
            <div className="frameText">
                <div className="frameTitle">{frame.titulo}</div>
                <div className="frameDescription">{frame.descricao}</div>
                <button className="frameButton"onClick={adicionando}>Adicionar</button>
            
            </div>
        </div>
    );
}

export default Frame;