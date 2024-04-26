import { useEffect, useState } from 'react';

type WindowDimensions = {
  width: number;
  height: number;
};

type IconPosition = {
  x: string;
  y: string;
};

const useDots = (): {
  viewBox: string;
  dotRadius: number;
  iconPos: IconPosition;
  cellSize: number;
} => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: 1,
    height: 1,
  });

  useEffect(() => {
    setWindowDimensions({
      width: window.innerWidth,
      height: document.getElementById('main')?.getBoundingClientRect().height!,
    });

    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: document.getElementById('main')?.getBoundingClientRect()
          .height!,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const dotRadius = 11.4;
  const cellSize = 32;
  const numberOfDotsX = (windowDimensions.width - 10) / cellSize;
  const numberOfDotsY = Math.ceil((windowDimensions.height - 10) / cellSize);

  const viewBoxWidth = numberOfDotsX * cellSize;
  const viewBoxHeight = numberOfDotsY * cellSize;

  const scaleFactor =
    windowDimensions.width < 800
      ? viewBoxWidth / (cellSize * 20)
      : viewBoxWidth / (cellSize * 57);
  const iconXPos =
    windowDimensions.width < 800
      ? (viewBoxWidth / scaleFactor - 512) / 2
      : viewBoxWidth / scaleFactor - 512 - cellSize * 3;

  const iconYPos = windowDimensions.width < 800 ? '448' : '160';

  return {
    cellSize,
    dotRadius,
    iconPos: { x: iconXPos.toString(), y: iconYPos },
    viewBox: `0 0 ${viewBoxWidth / scaleFactor} ${viewBoxHeight / scaleFactor}`,
  };
};

export default useDots;
