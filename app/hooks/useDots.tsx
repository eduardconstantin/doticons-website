import { useEffect, useState } from 'react';

type WindowDimensions = {
  width: number;
  height: number;
};

const useDots = (): {
  viewBox: string;
  dotRadius: number;
  iconXPos: string;
  cellSize: number;
} => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: 1,
    height: 1,
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
  const cellSize = dotRadius * 2 + 9.2;
  const numberOfDotsX = Math.ceil(windowDimensions.width / cellSize);
  const numberOfDotsY = Math.ceil(windowDimensions.height / cellSize);

  const viewBoxWidth = numberOfDotsX * cellSize;
  const viewBoxHeight = numberOfDotsY * cellSize;

  const scaleFactor =
    windowDimensions.width < 700 ? 1.2 : viewBoxWidth / (cellSize * 56);
  const iconXPos = viewBoxWidth / scaleFactor - 512 - cellSize * 2;

  return {
    cellSize,
    dotRadius,
    iconXPos:
      windowDimensions.width < 700
        ? `${viewBoxWidth * 1.5 - 512}`
        : iconXPos.toString(),
    viewBox:
      windowDimensions.width < 700
        ? `0 0 ${viewBoxWidth * 1.5} ${viewBoxHeight * 1.5}`
        : `0 0 ${viewBoxWidth / scaleFactor} ${viewBoxHeight / scaleFactor}`,
  };
};

export default useDots;
