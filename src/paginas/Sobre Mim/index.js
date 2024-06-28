import PostModelo from 'componentes/PostModelo'
import fotoSobreMim from "assets/Henrique.png"
import styles from './SobreMim.module.css'
import fotoCapa from 'assets/sobre_mim_capa.png'

export default function SobreMim() {
    return(
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Henrique!
            </h3>
            
            <img
                src={fotoSobreMim}
                alt="Foto do Henrique Melo sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou estudante de Front-end na Alura e estou feliz de te ver por aqui.
            </p>
             
            <p className={styles.paragrafo}>
                Minha história com programação começou na Alura. Eu aprendi lógica de programação e o básico de várias linguagens, como Python mas sem aprofundar muito. Eu gostava muito de estudar programação, e desde que comecei decidi que esse seria o meu trabalho.
            </p>
             
            <p className={styles.paragrafo}>
                No ensino superior, pretendo fazer Analise e Desenvolvimento de Sistemas (ADS) ou Engenharia da Computação. Além de ter vontade de aprender programação pelo Instituto PROA. 
            </p>
             
            <p className={styles.paragrafo}>
                Ainda não possuo experiência em um emprego, apenas a experiência que o curso da Alura me proporciona, porém em um futuro próximo pretendo começar a trabalhar nem que seja com o básico.
            </p>
             
            <p className={styles.paragrafo}>
                Cada dia tem sido aprenas aprendizados atrás de aprendizados. A Alura é uma escola não só para seus alunos e alunas, mas também para os colaboradores e colaboradoras. Hoje sou muito feliz de ter a oportunidade de aprender com esses conteúdos ricos e encantadores.
            </p>
        </PostModelo>
    )
}