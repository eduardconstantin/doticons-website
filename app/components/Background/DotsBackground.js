'use client';

import React from 'react';
import styles from './DotsBackground.module.css';

const DotsBackground = () => {
  const numCols =
    window.innerWidth <= 400
      ? 10
      : window.innerWidth <= 500
      ? 13
      : window.innerWidth <= 550
      ? 14
      : window.innerWidth <= 600
      ? 15
      : window.innerWidth <= 650
      ? 16
      : window.innerWidth <= 700
      ? 17
      : window.innerWidth <= 750
      ? 18
      : window.innerWidth <= 800
      ? 20
      : window.innerWidth <= 850
      ? 21
      : window.innerWidth <= 900
      ? 22
      : window.innerWidth <= 950
      ? 23
      : window.innerWidth <= 1000
      ? 24
      : 35;

  const rowSpacing = window.innerWidth > 1000 ? 3 : 2;

  const numRows = 50;
  const colSpacing = 0;

  const circleElements = [];

  for (let i = 0; i < numCols; i++) {
    for (let j = 0; j < numRows; j++) {
      const cx = i * (100 / numCols) + colSpacing * i + 50 / numCols;
      const cy = j * (100 / numRows) + rowSpacing * j + 50 / numRows;

      const animationDelay = Math.random() * 1 + 's';
      const animationDuration = Math.random() * 5 + 5 + 's';

      circleElements.push(
        <circle
          key={`${i}-${j}`}
          className={styles.dot}
          style={{
            cx: `${cx}%`,
            cy: `${cy}%`,
            r: '11',
            animation: `dotAnimation ${animationDuration} linear ${animationDelay} infinite`,
          }}
        />
      );
    }
  }

  return (
    <div className={styles.background}>
      <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            @keyframes dotAnimation {
              0% {
                opacity: 0.4;
              }
              100% {
                opacity: 1;
              }
            }
          `}
        </style>
        {circleElements}
      </svg>
    </div>
  );
};

export default DotsBackground;
