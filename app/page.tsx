import DotsBackground from './components/Background/DotsBackground';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <DotsBackground />
    </main>
  );
}
