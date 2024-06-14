import Link from 'next/link';
import DotsBackground from '@doticons-website/app/components/Background/DotsBackground';
import IconSwitchers from '@doticons-website/app/components/IconSwitchers/IconSwitchers';
import styles from './page.module.scss';

async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 700));
  return;
}

export default async function Home() {
  await wait();
  return (
    <main id="main">
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
      <section id="content" className={styles.content}>
        <IconSwitchers />
      </section>
      <DotsBackground />
    </main>
  );
}
