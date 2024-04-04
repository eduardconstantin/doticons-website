import DotsBackground from '@doticons-website/app/components/Background/DotsBackground';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.intro}></section>
      <DotsBackground />
    </main>
  );
}
