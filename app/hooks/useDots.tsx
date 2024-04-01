import { useEffect, useState } from 'react';

type WindowDimensions = {
  width: number;
  height: number;
};

type Dot = {
  key: string;
  cx: string;
  cy: string;
  r: number;
};

const useDots = (): { dots: Dot[]; viewBox: string } => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

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

  const dots: Dot[] = Array.from({ length: numberOfDotsY }, (_, i) =>
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
