import { useEffect, useState } from 'react';

const useDots = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const dotRadius = 13;
  const padding = 10;
  const dotSpacing = dotRadius * 2 + 11;
  const numberOfDotsX = Math.ceil(
    (windowDimensions.width - padding) / dotSpacing
  );
  const numberOfDotsY = Math.ceil(
    (windowDimensions.height - padding) / dotSpacing
  );

  const dots = Array.from({ length: numberOfDotsY }, (_, i) =>
    Array.from({ length: numberOfDotsX }, (_, j) => ({
      key: `${i}-${j}`,
      cx: `${j * dotSpacing + dotRadius}px`,
      cy: `${i * dotSpacing + dotRadius}px`,
      r: dotRadius,
    }))
  ).flat();

  return {
    dots,
    viewBox: `0 0 ${numberOfDotsX * dotSpacing - padding} ${
      numberOfDotsY * dotSpacing - padding
    }`,
  };
};

export default useDots;
