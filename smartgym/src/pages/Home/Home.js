import React from "react";
import "./Home.css"

function Home(){
    return ( <div className="body">
        <div className="plano_de_fundo_home">
            <div className="titulo_home">
            <h3>SEJA FITNESS</h3>
            <h3>SEJA SAUDÁVEL</h3>
            <div className="seja_smart_gym">

                <div className="seja_palavra">
                <h3>SEJA</h3>
                </div>

                <div className="smart_palavra">
                <h3> SMART </h3>
                </div>

                <div className="gym_palavra">
                <h3>GYM</h3>
                </div>

            </div>
        </div>

        <div className="subtitulo_home">
            <h3>“Quem acredita sempre alcança”</h3>
        </div>
        </div>


        <div className="who_we_are">
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
            <img src="/images/imagem_home.jpg"/>
        </div>


        <div className="caixa_blocos">

            <div className="bloco_marrom">
                <div className="missao_titulo">
                    <img src="/images/missao_icon.png"/>
                    <div className="mission_title">
                        <h3>Missão</h3>
                    </div>
                </div>
                <div className="missao_bloco_1">
                    <h1>Incentivar a prática de exercícios físicos, corrobando, assim, para a longevidade de nossos clientes,
                    assim como seu bem estar físico e emocional.</h1>
                </div>
            </div>

            <div className="bloco_marrom">
                <div className="visao_titulo">
                    <img src="/images/visao_icon.png"/>
                    <div className="vision_title">
                        <h3>Visão</h3>
                    </div>
                </div>
                <div className="visao_bloco_2">
                        <h1>Consolidar o nosso nome no mercado e ser referência nacional pela qualidade ofericida por nossos equipamentos,
                        tal como proporcionar um ambiente de inclusão e diversidade para os nosso clientes</h1>
                </div>
            </div>

            <div className="bloco_marrom">
                <div className="valores_titulo">
                    <img src="/images/valores_icon.png"/>
                    <div className="values_title">
                        <h3>Valores</h3>
                    </div>
                </div>
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