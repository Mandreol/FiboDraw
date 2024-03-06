import Canvas from './componets/canvas/Canvas';
import { Box, Flex } from '@chakra-ui/react';
import Panel from './componets/controls/Panel';
import CanvasCtxProvider from './Providers/CanvasCtxProvider';

function App() {
  return (
    <CanvasCtxProvider>
      <Flex justifyContent={'space-around'} align={'center'} h={'100vh'}>
        <Panel />
        <Canvas />
      </Flex>
    </CanvasCtxProvider>
  );
}

export default App;
