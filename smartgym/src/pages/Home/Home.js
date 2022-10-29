import React from "react";
import "./Home.css"

function Home(){
    return ( <div className="body">

        <div className="titulo_home">
            <h3>SEJA FITNESS</h3>
            <h3>SEJA SAUDÁVEL</h3>
            <h3>SEJA SMART GYM</h3>
        </div>

        <div className="subtitulo_home">
            <h3>“Quem acredita sempre alcança”</h3>
        </div>

        <div className="secao_quem_somos_nos">
            <div className="titulo_quem_somos_nos">
                <h3>Quem somos nós?</h3>
            </div>
            <div className="texto_quem_somos_nos">
                <h1>
                A Smart Gym surgiu com o propósito de melhoria da qualidade de vida dos moradores do bairro.
                O projeto desenvolvido pelos nossos fundadores começou com a meta de proporcionar uma nova experiência na área fitness,
                que conciliasse os exercícios físicos à vida corrida dos dias atuais. 
                Foi então que em 2017, a nossa marca foi criada, e hoje nosso objetivo é ser mais do que apenas uma academia,
                mas sim um espaço de desenvolvimento pessoal além do físico.
                Buscamos otimizar o tempo dos nossos associados, fazendo uso das tecnologias mais recentes para entregar praticidade e
                satisfação durante a prática esportiva.
                </h1>
            </div>
        </div>





        <div className="caixa_blocos">

            <div className="bloco_marrom">
                <div className="missao_titulo">
                    <h3>Missão</h3>
                </div>
                <div className="missao_bloco_1">
                    <h1>Incentivar a prática de exercícios físicos, corrobando, assim, para a longevidade de nossos clientes,
                    assim como seu bem estar físico e emocional.</h1>
                </div>
            </div>

            <div className="bloco_marrom">
                <div className="visao_titulo">
                        <h3>Visão</h3>
                </div>
                <div className="visao_bloco_2">
                        <h1>Consolidar o nosso nome no mercado e ser referência nacional pela qualidade ofericida por nossos equipamentos,
                        tal como proporcionar um ambiente de inclusão e diversidade para os nosso clientes</h1>
                </div>
            </div>

            <div className="bloco_marrom">
                <div className="valores_titulo">
                        <h3>Valores</h3>
                </div>
                <div className="valores_bloco_3">
                    <h1>Respeito em primeiro lugar</h1>
                    <h1>Juntos somos mais fortes</h1>
                    <h1>Saúde mental importa</h1>
                    <h1>Seja a melhor versão de si mesmo</h1>
                    <h1>Foco e disciplina</h1>
                </div>
            </div>
            
        </div>

        </div>

    );
}
export default Home;