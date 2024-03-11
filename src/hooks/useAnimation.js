import { useState, useEffect } from 'react';
import canvasValues from '../dataAndFunctions/canvasValues';

const useAnimation = (ctx) => {
  const [CV, setCV] = useState(canvasValues);
  let frameIncrement = 0;

  useEffect(() => {
    const animate = () => {
      if (CV.frames === frameIncrement) {
        setCV((prevSate) => ({
          ...prevSate,
          animationState: false,
        }));
        return;
      }
      if (frameIncrement === 0) {
        setCV((prevSate) => ({
          ...prevSate,
          animationState: true,
        }));
      }

      drawFunction(ctx, frameIncrement, CV);
      frameIncrement++;
      requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animate);
  }, []);

  return animationState;
};

export default useAnimation;
