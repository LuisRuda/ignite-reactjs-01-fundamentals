import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/LuisRuda.png" />
          <div className={styles.authorInfo}>
            <strong>Luis Paulo Ruda</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="21 de junho ás 13:28h" dateTime="2022-06-21 13:28:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a className={styles.profession} href="#">jane.design/doctorcare</a></p>
        <p>
          <a href="#">#novoprojeto</a>
          <a href="#">#nlw</a>
          <a href="#">#rocketseat</a>
        </p>
      </div>
    </article>
  )
}