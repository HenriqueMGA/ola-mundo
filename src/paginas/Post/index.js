import { useParams } from "react-router-dom"
import posts from 'json/posts.json'
import PostModelo from "componentes/PostModelo"
import Markdown from "react-markdown"
import './Post.css'
import PaginaPadrao from "componentes/PaginaPadrao"
import styles from './Post.module.css'
import PostCard from "componentes/PostCard"

export default function Post() {
    const parametros = useParams()

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    if(!post) {
        return <h1>Post não encontrado...</h1>
    }

    const postsRecomendados = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);
    
    return (
        <PaginaPadrao>
            <PostModelo
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
            >
                <div className="post-markdown-container">
                    <Markdown>
                        {post.texto}
                    </Markdown>
                </div>

                <h2 className={styles.tituloOutrosPosts}>
                    Outros posts que você pode gostar:
                </h2>

                <ul className={styles.postsRecomendados}>
                        {postsRecomendados.map((post) => (
                            <li key={post.id}>
                                <PostCard post={post} />
                            </li>
                        ))}
                    </ul>
            </PostModelo>
        </PaginaPadrao>
        
    )
}