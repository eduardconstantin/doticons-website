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

const useDots = (): { dots: Dot[]; viewBox: string; c: number; r: number } => {
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
  const numberOfDotsY = Math.floor(
    (windowDimensions.height - padding) / dotSpacing
  );

  const tileSizeX = (windowDimensions.width - padding) / numberOfDotsX;
  const tileSizeY = (windowDimensions.height - 2 * padding) / numberOfDotsY;

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
    c: dotSpacing,
    r: dotRadius,
    viewBox: `0 0 ${numberOfDotsX * tileSizeX} ${numberOfDotsY * tileSizeY}`,
  };
};

export default useDots;
