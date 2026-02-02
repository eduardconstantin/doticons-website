import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getPackageVersion } from '@doticons-website/app/utils/getPackageVersion';
import GitButton from '../GitButton';
import styles from './Navbar.module.scss';

const Navbar: FC = async () => {
  let version = 0;
  await getPackageVersion()
    .then((v) => (version = v))
    .catch((error) => console.error(error));

  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_grouped}>
        <div className={styles.nav_left_grouped}>
          <Link href={'/'}>
            <Image
              draggable="false"
              width={140}
              height={50}
              src="/DotIcons.svg"
              alt="Doticons Logo"
              loading="eager"
            />
          </Link>
          <Link href={'https://www.npmjs.com/package/doticons'} target="_blank">
            <p className={styles.version}>{'v' + version}</p>
          </Link>
        </div>
        <GitButton />
      </div>
    </nav>
  );
};

export default Navbar;
