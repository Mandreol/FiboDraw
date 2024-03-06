const animate = (ctx, canvas) => {
    if (c.frames === frameIncrement) {
      setC((prevSate) => ({
        ...prevSate,
        animationState: false,
      }));
      return;
    }
    if (frameIncrement === 0) {
      setC((prevSate) => ({
        ...prevSate,
        animationState: true,
      }));
    }

    drawSpiral(ctx, canvas);
    requestAnimationFrame(() => animate(ctx, canvas));
  };

  export default animate