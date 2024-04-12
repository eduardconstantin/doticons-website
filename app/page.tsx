import Link from 'next/link';
import DotsBackground from '@doticons-website/app/components/Background/DotsBackground';
import Search from '@doticons-website/app/components/Search/Search';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main>
      <section className={styles.intro}>
        <div className={styles.introContent}>
          <h1>
            A simple and sleek collection of dot icons crafted in SVG format
          </h1>
          <div className={styles.links}>
            <p>MIT LICENSE</p>
            <Link href="https://github.com/eduardconstantin/doticons">
              DOCUMENTATION
            </Link>
            <Link href="https://www.npmjs.com/package/doticons">
              NPM PACKAGE
            </Link>
          </div>
        </div>
      </section>
      <Search />
      <section id="content" className={styles.content}></section>
      <DotsBackground />
    </main>
  );
}
