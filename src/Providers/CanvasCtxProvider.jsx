import { createContext, useState, useContext } from 'react';
import canvasValues from '../dataAndFunctions/canvasValues';
export const CanvasContext = createContext();

function CanvasCtxProvider(props) {
  const [CV, setCV] = useState(canvasValues);

  const value = { CV, setCV };

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
