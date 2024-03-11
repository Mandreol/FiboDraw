import { Select, Flex, Text } from '@chakra-ui/react';

const InputSelect = ({ data, updateCanvasValue }) => {
  const handleSelectChange = (e) => {
    const value = e.target.value;
    updateCanvasValue(data.name, value);
  };
  return (
    <Flex justifyContent={'space-between'}>
      <Text>{data.name} </Text>
      <Select placeholder={value} w={'35%'} onSelect={handleSelectChange}>
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
