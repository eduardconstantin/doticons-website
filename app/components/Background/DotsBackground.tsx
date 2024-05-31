'use client';

import {
  useEffect,
  useState,
  type FC,
  type ForwardRefExoticComponent,
  type SVGProps,
} from 'react';
import useDots from '@doticons-website/app/hooks/useDots';
import * as Icons16 from 'doticons/16/index';
import styles from './DotsBackground.module.scss';

const DotsBackground: FC = () => {
  const { cellSize, dotRadius, iconPos, viewBox } = useDots();
  const [Icon, setIcon] = useState<
    ForwardRefExoticComponent<SVGProps<SVGSVGElement>>
  >(
    Icons16['GithubDoticon'] as ForwardRefExoticComponent<
      SVGProps<SVGSVGElement>
    >
  );

  useEffect(() => {
    const randomNo = Math.floor(Math.random() * Object.keys(Icons16).length);
    setIcon(
      Icons16[
        Object.keys(Icons16)[randomNo] as keyof typeof Icons16
      ] as ForwardRefExoticComponent<SVGProps<SVGSVGElement>>
    );
  }, []);

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
          <Icon viewBox={undefined} width="100%" height="100%" id="doticon" />
        </defs>

        <rect width="100%" height="100%" fill="url(#dotPattern)" />

        <use href="#doticon" x={iconPos.x} y={iconPos.y} fill="white" />
      </svg>
    </div>
  );
};

export default DotsBackground;
