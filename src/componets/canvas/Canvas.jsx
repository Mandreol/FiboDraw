import { Box } from '@chakra-ui/react';
import { useRef, useState, useEffect } from 'react';
import { useCanvasContext } from '../../Providers/CanvasCtxProvider';
import useAnimation from '../../hooks/useAnimation';

const property = {
  bg: 'red',
  w: '154vh',
  h: '95vh',
};
const Canvas = () => {
  const [windowSize, setWindowSize] = useState(window.innerHeight);
  const canvasRef = useRef(null);
  const { CV, setC } = useCanvasContext();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.canvas.height = windowSize * 0.95;
    ctx.canvas.width = windowSize * 1.54;
    ctx.clearRect(0, 0, windowSize, windowSize * 1.54);

    useAnimation(ctx);

    const handleResize = () => {
      ctx.clearRect(0, 0, windowSize, windowSize * 1.54);
      setWindowSize(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize]);

  return <Box sx={property} ref={canvasRef} />;
};

export default Canvas;
