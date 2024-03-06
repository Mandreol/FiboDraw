import { Flex, Switch, Text } from '@chakra-ui/react';

const InputCheckBox = ({ data }) => {
  return (
    <Flex justifyContent={'space-between'}>
      <Text>{data.name} </Text>
      <Switch />
    </Flex>
  );
};

export default InputCheckBox;
