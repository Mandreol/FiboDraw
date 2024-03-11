const drawSpiral = (ctx, frameIncrement, CV) => {
  let deltaAngle = frameIncrement * CV.angleIncrement;
  let deltaSize = frameIncrement * CV.sizeIncrement;
  let deltaLineWidth = frameIncrement * CV.lineIncrementWidth;
  let deltaRadius = frameIncrement * CV.radiusIncrement;
  let deltaFillColor = frameIncrement * CV.fillColorIncrement;
  let deltaFillSaturation = frameIncrement * CV.fillLightnessIncrement;
  let deltafillLightness = frameIncrement * CV.fillLightnessIncrement;
  let deltaStrokeColor = frameIncrement * strokeColorIncrement;
  let deltastrokeSaturation = frameIncrement * CV.strokeSaturationIncrement;
  let deltaStrokeLightness = frameIncrement * CV.strokeLightnessIncrement;
  let scaleFactor = 1;

  angle = deltaAngle * c.level;
  radius =
    (deltaRadius * c.radioSpin + c.radioFactor ** factorIncrement) *
    scaleFactor;
  pX =
    c.spinX * radius * Math.sin(angle) +
    canvas.width / 2 +
    +c.centerX * scaleFactor;
  pY =
    c.spinY * radius * Math.cos(angle) +
    canvas.height / 2 +
    +c.centerY * scaleFactor;

  size =
    deltaSize && size < CV.finalSize
      ? CV.initialSize * scaleFactor
      : CV.finalSize;
  ctx.lineWidth = CV.lineWidth + deltaLineWidth;

  ctx.fillStyle = `hsl(${CV.fillColor + deltaFillColor}, ${
    CV.fillSaturation + deltaFillSaturation
  }%, ${CV.fillLightness + deltafillLightness}%)`;
  ctx.strokeStyle = `hsl(${CV.strokeColor + deltaStrokeColor}, ${
    CV.strokeSaturation + deltastrokeSaturation
  }%, ${CV.strokeLightness + deltaStrokeLightness}%)`;

  ctx.beginPath();
  ctx.arc(pX, pY, size, 0, Math.PI * 2);
  ctx.closePath();
  if (CV.stroke) ctx.stroke();
  if (CV.fill) ctx.fill();
};
