import Link from 'next/link';
import DotsBackground from '@doticons-website/app/components/Background/DotsBackground';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.intro}>
        <h1>
          A simple and sleek collection of dot icons crafted in SVG format
        </h1>
        <div className={styles.links}>
          <p>MIT LICENSE</p>
          <Link href={'#'}>DOCUMENTATION</Link>
          <Link href={'#'}>NPM PACKAGE</Link>
        </div>
      </section>
      <DotsBackground />
    </main>
  );
}
