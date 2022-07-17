import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://avatars.githubusercontent.com/u/44874956?v=4'></img>
                    <div className={styles.authorInfo}>
                        <strong>Andrei Ferreira</strong>
                        <span>Web Development</span>
                    </div>
                </div>
                <time title='11 de maio as 8h00' dateTime='2022-05-11 08:00:00'>Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>fala galera</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz noNLW return, evento muito doido</p>
                <p><a href=''>andrei.ferreira</a></p>
                <p><a href=''>#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}