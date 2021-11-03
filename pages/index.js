import styles from '../styles/Home.module.css';
import { Toolbar } from '../components/toolbar';

export default function Home() {
  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <h1>News App</h1>
        <h3>သူ သတင်းတွေဖတ်နေတယ် မင်းမဟုတ်တဲ့ တစ်ခြားတစ်ယောက်နဲ့</h3>
      </div>
    </div>
  )
}
