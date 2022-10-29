import React from "react";
import "./Home.css"

function Home(){
    return ( <div className="body">
        <div className="titulo_home">
            <p>SEJA FITNESS</p>
            <p>SEJA SAUDÁVEL</p>
            <p>SEJA SMART GYM</p>
            <p>“Quem acredita sempre alcança”</p>
        </div>

        <div className="caixa_blocos">

            <div className="bloco_marrom">
                <div className="missao_bloco_1">
                    <p>Incentivar a prática de exercícios físicos, corrobando, assim, para a longevidade de nossos clientes,
                    assim como seu bem estar físico e emocional.</p>
                </div>
            
            </div>

            <div className="bloco_marrom">
                <div className="visao_bloco_2">
                        <p>Consolidar o nosso nome no mercado e ser referência nacional pela qualidade ofericida por nossos equipamentos,
                        tal como proporcionar um ambiente de inclusão e diversidade para os nosso clientes</p>
                </div>
            </div>

            <div className="bloco_marrom">
                <div className="valores_bloco_3">
                    <p>Respeito em primeiro lugar</p>
                    <p>Juntos somos mais fortes</p>
                    <p>Saúde mental importa</p>
                    <p>Seja a melhor versão de si mesmo</p>
                    <p>Foco e disciplina</p>
                </div>
            </div>
            
        </div>

        </div>

    );
}
export default Home;