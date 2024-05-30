'use client';

import { type FC } from 'react';
import useDots from '@doticons-website/app/hooks/useDots';
import * as Icons16 from 'doticons/16/index';
import styles from './DotsBackground.module.scss';

const DotsBackground: FC = () => {
  const { cellSize, dotRadius, iconPos, viewBox } = useDots();
  const { GithubDoticon } = Icons16;

  return (
    <div className={styles.background}>
      <svg viewBox={viewBox}>
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
          <GithubDoticon
            viewBox={undefined}
            width="100%"
            height="100%"
            id="doticon"
          />
        </defs>

        <rect width="100%" height="100%" fill="url(#dotPattern)" />

        <use href="#doticon" x={iconPos.x} y={iconPos.y} fill="white" />
      </svg>
    </div>
  );
};

export default DotsBackground;
