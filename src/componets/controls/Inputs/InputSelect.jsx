import { Select, Flex, Text } from '@chakra-ui/react';

const InputSelect = ({ data }) => {
  return (
    <Flex justifyContent={'space-between'}>
      <Text>{data.name} </Text>
      <Select placeholder='Select option' w={'35%'}>
        {data.options.map((op, i) => (
          <option key={i} value={op}>
            {op}
          </option>
        ))}
      </Select>
    </Flex>
  );
};

export default InputSelect;
