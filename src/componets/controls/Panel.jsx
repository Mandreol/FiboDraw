import { Flex, Accordion } from '@chakra-ui/react';
import inputsData from '../../dantaAndFunctions/inputsData.js';
import React from 'react';
import InputGroup from './InputGroup.jsx';

const Panel = () => {
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
          <InputGroup key={i} data={group} />
        ))}
      </Accordion>
    </Flex>
  );
};

export default Panel;
