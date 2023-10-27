import { FC } from 'react';
import styles from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p>Built using NextJS</p>
    </footer>
  );
};

export default Footer;
