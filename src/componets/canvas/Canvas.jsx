import { Box } from '@chakra-ui/react';
import { useRef, useState, useEffect } from 'react';
import {useCanvasContext} from "../../Providers/CanvasCtxProvider"
const property = {
  bg: 'red',
  w: '154vh',
  h: '95vh',
};
const Canvas = () => {
  const [windowSize, setWindowSize] = useState(window.innerHeight);
  const canvasRef = useRef(null);
  const { CValues, setC } = useCanvasContext();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.canvas.height = windowSize;
    ctx.canvas.width = windowSize * 1.618;
    ctx.clearRect(0, 0, windowSize, windowSize * 1.618);
    if (!(c.frames === 0)) {
      animate(ctx, canvas);
    }

    const handleResize = () => {
      ctx.clearRect(0, 0, windowSize, windowSize * 1.618);
      setWindowSize(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [CValues.renderFlag, windowSize]);
  return <Box sx={property} ref={canvasRef}/>;
};

export default Canvas;
