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
            {/* <image src="/images/nomedoarquivo.png" alt="NomeExercicio"/> */}
            <h1>Perfil</h1>
        </div>
        </div>
    );
}
export default Perfil;