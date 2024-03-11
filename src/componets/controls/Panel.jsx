import { Flex, Accordion } from '@chakra-ui/react';
import inputsData from '../../dataAndFunctions/inputsData.js';
import { useCanvasContext } from '../../Providers/CanvasCtxProvider';
import InputGroup from './InputGroup.jsx';

const Panel = () => {
  const { CV, setCV } = useCanvasContext();

  const handleValue = (input, value) => {
    setCV((prevSate) => ({
      ...prevSate,
      [input]: { value },
    }));
  };

  return (
    <Flex
      direction={'column'}
      gap={'0.5rem'}
      border={'solid black 1px'}
      w={'300px'}
      borderRadius={'5px'}
      padding={'5px'}
    >
      <Accordion allowToggle>
        {inputsData.map((group, i) => (
          <InputGroup
            key={i}
            data={group}
            updateCanvasValue={handleValue}
            canvasValue={CV}
          />
        ))}
      </Accordion>
    </Flex>
  );
};

export default Panel;
