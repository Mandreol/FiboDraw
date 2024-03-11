import { Flex, Switch, Text } from '@chakra-ui/react';

const InputCheckBox = ({ data }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    updateCanvasValue(data.name, value);
  };

  return (
    <Flex justifyContent={'space-between'}>
      <Text>{data.name} </Text>
      <Switch />
    </Flex>
  );
};

export default InputCheckBox;
