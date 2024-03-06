import React from 'react';
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import InputNumber from './Inputs/InputNumber';
import InputColorPicker from './Inputs/InputColorPicker'; // Corregido el nombre del componente
import InputCheckBox from './Inputs/InputCheckBox';
import InputSelect from './Inputs/InputSelect';

const InputGroup = ({ data }) => {
  const inputComponents = {
    number: InputNumber,
    color: InputColorPicker,
    select: InputSelect,
    checkBox: InputCheckBox,
  };

  return (
    <AccordionItem key={data.groupName}>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
          {data.groupName}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>
        {data.inputs.map((input, i) => {
          const InputComponent = inputComponents[input.type];
          return InputComponent ? (
            <InputComponent key={i} data={data.inputs[i]} />
          ) : null;
        })}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default InputGroup;
