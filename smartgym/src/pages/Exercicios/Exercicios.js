import React from "react";
import Frame from "../../components/Frame";
import './Exercicios.css'

const frames = [
    {
        id: 1,
        title: "Cerrote",
        description: "Apoie-se com joelho e braço direito no banco, inclinando-se para frente. Com o braço esquerdo, segure  halter e realize o movimento puxando o peso para trás. Repita invertendo o lado.",
        src: "/images/Cerrote.jpg"
    },
    {
        id: 2,
        title: "Extensão Tríceps",
        description: "De pé, segure o halter bom ambas as mãos voltadas para sua cabeça. Mantenha os cotovelos em uma posição fixa e os flexione de extendendo o braço.",
    },
    {
        id: 3,
        title: "Flexão",
        description: "Deite-se no chão de barriga para baixo, apoie as mãos na direção dos ombros.  Estenda os cotovelos, subindo o corpo todo de uma vez. Flexione os cotovelos e retorne quase à posição inicial.",
    },
    {
        id: 4,
        title: "Agachamento Livre",
        description: "Posicione os pés afastado, na largura dos quadris a coloque a barra sobre o pescoço. Dobre os joelhos e abaixe lentamente até que a parte superior das coxas esteja paralela ao chão. Retorne a posição incial.",
    },
    {
        id: 5,
        title: "Leg Press",
        description: "Apoie as costas no banco do aparelho, mantenha a coluna ereta. Apoie os pés na plataforma, mantendo-os alinhados com o joelho. Realize a flexão do joelho. Estenda os joelhos até a posição incial.",
    },
    {
        id: 6,
        title: "Cadeira Extensora",
        description: "Sente- se, adaptando o suporte na altura da linha do tornozelo. Inicie o movimento e estender o joelho. Flexionar de maneira controlada os joelhos até retornar a posição inicial.",
    },
    {
        id: 7,
        title: "Quadríceps e Coluna",
        description: "Sente-se e posicione a sola do pé direito apontando para a coxa esquerda. Mantenha a perna esdquerda esticada e inclin o tronco em direção a ela. Mantenha por 30 segundos e repita do outro lado.",
    },
    {
        id: 8,
        title: "Posterior de Ombro",
        description: "De pé posicione seu braço esquerdo para o lado direito do corpo a na altura do ombro. Apoie-o com o braço direito e mantenha por 30 segundos. Repita do outro lado.",
    },
    {
        id: 9,
        title: "Downward Dog",
        description: "Sente-se nos calcanhares com a testa no chão, braços estendidos acima da cabeça e mãos no chão à largura dos ombros. Eleve o tronco, estenda as pernas. Endireite as costas . Mantenha.",
    },
];

function Exercicios(){
    return (
        <div className="frameContainer">
            {frames.map((frame) => (
                <Frame key={frame.id} frame={frame} />
            ))}
        </div>
    );
}
export default Exercicios;