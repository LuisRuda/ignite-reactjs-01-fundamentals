import { ThumbsUp, Trash } from 'phosphor-react';

import { Avatar } from '../components/Avatar';

import styles from './Comment.module.css';

export function Comment ({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/LuisRuda.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luis Paulo Ruda</strong>
              <time 
                title="21 de junho ás 13:28h" 
                dateTime="2022-06-21 13:28:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}