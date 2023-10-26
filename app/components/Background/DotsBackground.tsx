'use client';

import { useEffect, useState } from 'react';
import styles from './DotsBackground.module.scss';

const DotsBackground = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [currentDots, setCurrentDots] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentDots.length < 15) {
        const newDot = [
          Math.floor(Math.random() * numberOfDotsY),
          Math.floor(Math.random() * numberOfDotsX),
        ];
        setCurrentDots((prevDots) => [...prevDots, newDot]);
        setTimeout(() => {
          setCurrentDots((prevDots) =>
            prevDots.map((dot) =>
              dot === newDot
                ? [
                    Math.floor(Math.random() * numberOfDotsY),
                    Math.floor(Math.random() * numberOfDotsX),
                  ]
                : dot
            )
          );
        }, 5000);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const dotRadius = 13;
  const padding = 10;
  const dotSpacing = dotRadius * 2 + 11;
  const numberOfDotsX = Math.ceil(
    (windowWidth - dotRadius - padding * 2) / dotSpacing
  );
  const numberOfDotsY = Math.ceil(
    (windowHeight - dotRadius - padding * 2) / dotSpacing
  );

  return (
    <div className={styles.background}>
      <svg
        className={styles.svg}
        viewBox={`0 0 ${windowWidth - padding * 2} ${
          windowHeight - padding * 2
        }`}
      >
        {Array.from({ length: numberOfDotsY }, (_, i) =>
          Array.from({ length: numberOfDotsX }, (_, j) => (
            <circle
              key={`${i}-${j}`}
              cx={`${j * dotSpacing + dotRadius + padding}px`}
              cy={`${i * dotSpacing + dotRadius + padding}px`}
              r={dotRadius}
              fill="white"
              fill-opacity={0.1}
            >
              {currentDots.some((dot) => dot[0] === i && dot[1] === j) && (
                <animate
                  attributeName="fill-opacity"
                  values="0.1;1;1;0.1"
                  dur={`${Math.random() * 5 + 5}s`}
                  repeatCount="indefinite"
                />
              )}
            </circle>
          ))
        )}
      </svg>
      {/*<svg className={styles.svg} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="dotPattern"
            patternUnits="userSpaceOnUse"
            width="37"
            height="37"
          >
            <circle cx="18.5" cy="18.5" r="13" fill="lightblue" opacity="0.1">
              <animate
                attributeName="fill-opacity"
                values="1;0;1"
                dur="2s"
                repeatCount="indefinite"
              />
              <set attributeName="fill" to="lightblue" begin="0s" />
            </circle>
          </pattern>
        </defs>
        <rect
          x="11"
          y="11"
          width="calc(100% - 22px)"
          height="calc(100% - 22px)"
          fill="url(#dotPattern)"
        />
      </svg>*/}
    </div>
  );
};

export default DotsBackground;
