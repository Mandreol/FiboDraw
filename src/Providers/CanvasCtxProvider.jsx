import { createContext, useState, useContext } from 'react';
import canvasValues from '../dantaAndFunctions/canvasValues';
export const CanvasContext = createContext();

function CanvasCtxProvider(props) {
  const [CValues, setC] = useState(canvasValues);

  const value = { CValues, setC };

  return (
    <CanvasContext.Provider value={value}>
      {props.children}
    </CanvasContext.Provider>
  );
}

export default CanvasCtxProvider;

export function useCanvasContext() {
  const context = useContext(CanvasContext);
  return context;
}
