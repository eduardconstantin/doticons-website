import DotsBackground from '@doticons-website/app/components/Background/DotsBackground';
import IntroIcon from '@doticons-website/app/components/IntroIcon/IntroIcon';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.intro}>
        <IntroIcon />
      </section>
      <DotsBackground />
    </main>
  );
}
