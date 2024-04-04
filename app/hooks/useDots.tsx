import { useEffect, useState } from 'react';

type WindowDimensions = {
  width: number;
  height: number;
};

const useDots = (): {
  viewBox: string;
  dotRadius: number;
  iconXPos: number;
  cellSize: number;
} => {
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

  const dotRadius = 11.4;
  const padding = 10;
  const cellSize = dotRadius * 2 + 9.15;
  const numberOfDotsX = Math.floor(
    (windowDimensions.width - padding) / cellSize
  );
  const numberOfDotsY = Math.floor(
    (windowDimensions.height - padding) / cellSize
  );

  const viewBoxWidth = numberOfDotsX * cellSize;
  const viewBoxHeight = numberOfDotsY * cellSize;

  const iconXPos = viewBoxWidth - 512 - cellSize * 2;

  return {
    cellSize,
    dotRadius,
    iconXPos,
    viewBox: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
  };
};

export default useDots;
