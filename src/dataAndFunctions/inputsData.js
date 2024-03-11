const inputsData = [
  {
    groupName: 'Shape',
    inputs: [
      { type: 'select', name: 'trace', options: ['circle', 'squere', 'line'] },
      { type: 'checkBox', name: 'fill' },
      { type: 'checkBox', name: 'stroke' },
      { type: 'number', name: 'sizeIncrement', step: '0.01' },
      { type: 'number', name: 'initialSize', step: '0.01' },
      { type: 'number', name: 'finalSize', step: '0.01' },
      { type: 'number', name: 'lineIncrement', step: '0.01' },
      { type: 'number', name: 'lineWidth', step: '0.01' },
    ],
  },
  {
    groupName: 'Color',
    inputs: [
      { type: 'color', name: 'backgroundColor' },
      { type: 'color', name: 'fillColor' },
      { type: 'number', name: 'fillColorChange', step: '0.001' },
      { type: 'number', name: 'fillSaturation', step: '0.01' },
      { type: 'number', name: 'fillSaturationIncrement', step: '0.001' },
      { type: 'number', name: 'fillLightness', step: '0.01' },
      { type: 'number', name: 'fillLightnessIncrement', step: '0.001' },
      { type: 'color', name: 'strokeColor' },
      { type: 'number', name: 'strokeColorChange', step: '0.001' },
      { type: 'number', name: 'strokeSaturation', step: '0.01' },
      { type: 'number', name: 'strokeSaturationIncrement', step: '0.001' },
      { type: 'number', name: 'strokeLightness', step: '0.01' },
      { type: 'number', name: 'strokeLightnessIncrement', step: '0.001' },
    ],
  },
  {
    groupName: 'Render',
    inputs: [
      { type: 'number', name: 'centerX', step: '0.01' },
      { type: 'number', name: 'centerY', step: '0.01' },
      { type: 'number', name: 'frames', step: '0.01' },
      { type: 'number', name: 'radio', step: '0.01' },
      { type: 'number', name: 'radioIncrement', step: '0.01' },
      { type: 'number', name: 'angle', step: '0.01' },
      { type: 'number', name: 'angleIncrement', step: '0.01' },
      { type: 'select', name: 'spiralType', options: ['lineal', 'cuadratic'] },
    ],
  },
];
export default inputsData;
