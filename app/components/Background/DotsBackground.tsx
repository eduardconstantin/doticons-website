'use client';

import { FC } from 'react';
import useDots from '@doticons-website/app/hooks/useDots';
import styles from './DotsBackground.module.scss';

const DotsBackground: FC = () => {
  const { dots, r, c, viewBox } = useDots();

  return (
    <div className={styles.background}>
      <svg
        width="100%"
        height="100%"
        viewBox={viewBox}
        style={{ padding: '10px' }}
      >
        <defs>
          <pattern
            id="dotPattern"
            patternUnits="userSpaceOnUse"
            width={c}
            height={c}
          >
            <circle
              cx={c / 2}
              cy={c / 2}
              r={r}
              fill="white"
              fillOpacity="0.1"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#dotPattern)" />
      </svg>
    </div>
  );
};

export default DotsBackground;
