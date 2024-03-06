import { Flex, Input, Text } from '@chakra-ui/react';

const InputColorPicker = ({ data }) => {
  return (
    <Flex justify={'space-between'}>
      <Text>{data.name} </Text>
      <Input type='color' w={'40px'} size={'xs'} />
    </Flex>
  );
};

export default InputColorPicker;
