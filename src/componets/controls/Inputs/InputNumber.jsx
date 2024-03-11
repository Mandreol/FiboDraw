import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Text,
} from '@chakra-ui/react';

const InputNumber = ({ data, updateCanvasValue }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    updateCanvasValue(data.name, value);
  };
  return (
    <Flex justifyContent={'space-between'}>
      <Text>{data.name}</Text>
      <NumberInput
        size={'xs'}
        precision={4}
        step={data.step}
        onChange={handleChange}
      >
        <NumberInputField bg={'grey'} borderRadius={'5px'} w={'80px'} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Flex>
  );
};

export default InputNumber;
