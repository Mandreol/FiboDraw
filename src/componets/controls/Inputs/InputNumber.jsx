import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Text,
} from '@chakra-ui/react';

const InputNumber = ({ data }) => {
  return (
    <Flex justifyContent={'space-between'}>
      <Text>{data.name}</Text>
      <NumberInput size={'xs'} precision={4} step={data.step}>
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
