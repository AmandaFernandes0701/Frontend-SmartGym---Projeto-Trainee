import React from "react";
import "./Frame.css";
import { getID } from "../../services/auth";
import api from "../../services/api";

function Frame({ frame }) {
  function adicionando(e) {
    console.log(frame);

    e.preventDefault();

    try {
      const user_id = getID();
      api.post("/relation", { user_id, id_exercicio: frame.id_exercicio });
      console.log(user_id);
      alert("Exercício adicionado com sucesso");
      console.log(frame.id_exercicio);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="frame">
      <div className="frameImage"><img style={{ width: "100%", height: "220px" }} src={frame.imagem} className="cerrote" alt=""/></div>
        {/* CORRIGIR TAMANHO DO FRAME */}
      <div className="frameText">
        <div className="frameTitle">{frame.titulo}</div>
        <div className="frameDescription">{frame.descricao}</div>
        <button className="frameButton" onClick={adicionando}>
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default Frame;
