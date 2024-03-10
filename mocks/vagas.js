import java from '../assets/vagas/java.png'
import database from '../assets/vagas/database-securitypng.png'
import figma from '../assets/vagas/figma.png'
import web from '../assets/vagas/design-responsivo.png'
import js from '../assets/vagas/js.png'

const geraNumeroAleatorio = function (min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

const vagas ={
    titulo:"Vagas",
    lista:[
        {
            nome:"dev. Java",
            image:java,
            distancia:`${geraNumeroAleatorio(1,500)} m`,
            estrelas:geraNumeroAleatorio(1,5)

        },
        {
            nome:"Engenheiro de Dados",
            image:database,
            distancia:`${geraNumeroAleatorio(1,500)} m`,
            estrelas:geraNumeroAleatorio(1,5)

        },
        {
            nome:"dev. JavaScript",
            image:js,
            distancia:`${geraNumeroAleatorio(1,500)} m`,
            estrelas:geraNumeroAleatorio(1,5)

        },
        {
            nome:"desenvolvedor Web",
            image:web,
            distancia:`${geraNumeroAleatorio(1,500)} m`,
            estrelas:geraNumeroAleatorio(1,5)

        },
        {
            nome:"dev. Java",
            image:java,
            distancia:`${geraNumeroAleatorio(1,500)} m`,
            estrelas:geraNumeroAleatorio(1,5)

        },
    ]
}

