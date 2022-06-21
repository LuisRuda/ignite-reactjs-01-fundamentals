import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';


function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Luis Paulo Ruda" 
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minima eum molestias. Architecto quia quibusdam cum laboriosam accusamus ipsum, illo consequuntur sunt, esse vero reiciendis dolores nihil ab veritatis magni!"
          />
          <Post 
            author="Luis P." 
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minima eum molestias. Architecto quia quibusdam cum laboriosam accusamus ipsum, illo consequuntur sunt, esse vero reiciendis dolores nihil ab veritatis magni!"
          />
        </main>
      </div>
    </div>
  )
}

export default App
