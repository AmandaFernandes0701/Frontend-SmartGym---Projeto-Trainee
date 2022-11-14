import React from "react";
import "./Home.css"

function Home() {
    return (<div className="body">
        <div className="plano_de_fundo_home">
            <div className="titulo_home">
                <p className="escrito_home_seja_fitness">SEJA FITNESS</p>
                <p className="escrito_home_corrigido_seja_saudavel">SEJA SAUDÁVEL</p>
                <div className="seja_smart_gym">

                    <div className="seja_smartgym_frase_home">
                        <div className="seja_palavra">
                            <p className="escrito_home_seja">SEJA</p>
                        </div>

                        <div className="smart_palavra">
                            <p className="escrito_home_corrigido_smart">SMART</p>
                        </div>

                        <div className="gym_palavra">
                            <p className="escrito_home_corrigido_gym">GYM</p>
                        </div>
                    </div>
                </div>
                <div className="subtitulo_home">
                <p lassName="escrito_home_subtitulo_home">“Quem acredita sempre alcança”</p>
            </div>
            </div>
        </div>


        <div className="who_we_are">
            <div className="secao_quem_somos_nos">
                <div className="titulo_quem_somos_nos">
                    <p>Quem somos nós?</p>
                </div>
                <div className="texto_quem_somos_nos">
                    <p>
                        A Smart Gym surgiu com o propósito de melhoria da qualidade de vida dos moradores do bairro.
                        O projeto desenvolvido pelos nossos fundadores começou com a meta de proporcionar uma nova experiência na área fitness,
                        que conciliasse os exercícios físicos à vida corrida dos dias atuais.
                        Foi então que em 2017, a nossa marca foi criada, e hoje nosso objetivo é ser mais do que apenas uma academia,
                        mas sim um espaço de desenvolvimento pessoal além do físico.
                        Buscamos otimizar o tempo dos nossos associados, fazendo uso das tecnologias mais recentes para entregar praticidade e
                        satisfação durante a prática esportiva.
                    </p>
                </div>
            </div>
            <div className="imagem_quem_somos_nos">
                <img src="/images/imagem_home.jpg" alt="imagem_home" className="imagem_home_nos" />
            </div>
        </div>


        <div className="caixa_blocos">

            <div className="bloco_marrom">
                <div className="missao_titulo">
                    <div className="missao_imagem">
                        <img src="/images/missao_icon.png" alt="missao_icon_imagem" className="image_mission_icon" />
                    </div>
                    <div className="mission_title">
                        <p>Missão</p>
                    </div>
                </div>
                <div className="missao_bloco_1">
                    <p>Incentivar a prática de exercícios físicos, corrobando, assim, para a longevidade de nossos clientes,
                        assim como seu bem estar físico e emocional.</p>
                </div>
            </div>

            <div className="bloco_marrom">
                <div className="visao_titulo">
                    <div className="visao_imagem">
                        <img src="/images/visao_icon.png" alt="vision_icon_imagem" className="image_vision_icon" />
                    </div>
                    <div className="vision_title">
                        <p>Visão</p>
                    </div>
                </div>
                <div className="visao_bloco_2">
                    <p>Consolidar o nosso nome no mercado e ser referência nacional pela qualidade ofericida por nossos equipamentos,
                        tal como proporcionar um ambiente de inclusão e diversidade para os nosso clientes</p>
                </div>
            </div>

            <div className="bloco_marrom">
                <div className="valores_titulo">
                    <div className="valores_imagem">
                        <img src="/images/valores_icon.png" alt="values_icon_imagem" className="image_values_icon" />
                    </div>
                    <div className="values_title">
                        <p>Valores</p>
                    </div>
                </div>
                <div className="valores_bloco_3">
                    <p> Respeito em primeiro lugar
                        Juntos somos mais fortes
                        Saúde mental importa
                        <div></div>
                        Seja a melhor versão de si mesmo
                        <div></div>
                        Foco e disciplina</p>
                </div>
            </div>

        </div>
    </div>
    );
}
export default Home;