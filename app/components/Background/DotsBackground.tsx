'use client';

import { type FC } from 'react';
import useDots from '@doticons-website/app/hooks/useDots';
import { GithubDoticon } from 'doticons/16/index';
import styles from './DotsBackground.module.scss';

const DotsBackground: FC = () => {
  const { cellSize, dotRadius, iconXPos, viewBox } = useDots();

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
            width={cellSize}
            height={cellSize}
          >
            <circle
              cx={cellSize / 2}
              cy={cellSize / 2}
              r={dotRadius}
              fill="white"
              fillOpacity="0.1"
            />
          </pattern>
          <GithubDoticon viewBox={viewBox} id="doticon" />
        </defs>

        <rect width="100%" height="100%" fill="url(#dotPattern)" />

        <use href="#doticon" x={iconXPos} y="128" fill="white" />
      </svg>
    </div>
  );
};

export default DotsBackground;
