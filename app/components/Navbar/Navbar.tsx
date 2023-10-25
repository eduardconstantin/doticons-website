import Image from 'next/image';
import Link from 'next/link';
import GitButton from '../GitButton';
import styles from './Navbar.module.scss';

async function getPackageVersion() {
  const response = await fetch(`https://registry.npmjs.org/doticons`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  if (data['dist-tags'] && data['dist-tags'].latest) {
    return data['dist-tags'].latest;
  } else {
    throw new Error(`Package not found on npm.`);
  }
}

const Navbar = async () => {
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
