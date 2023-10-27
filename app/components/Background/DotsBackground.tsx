'use client';

import useDots from '@doticons-website/app/hooks/useDots';
import styles from './DotsBackground.module.scss';

const DotsBackground = () => {
  const { dots, viewBox } = useDots();

  return (
    <div className={styles.background}>
      <svg
        width="100%"
        height="100%"
        viewBox={viewBox}
        style={{ padding: '10px' }}
      >
        {dots.map(({ key, cx, cy, r }) => (
          <circle
            key={key}
            cx={cx}
            cy={cy}
            r={r}
            fill="white"
            fillOpacity={0.1}
          />
        ))}
      </svg>
    </div>
  );
};

export default DotsBackground;
