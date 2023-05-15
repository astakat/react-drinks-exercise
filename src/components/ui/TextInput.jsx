import { Input } from '@chakra-ui/react'
// import './TextInput.css'; className="text-input"

export const TextInput = ({ changeFn, ...props }) => (
    <Input width={600} color='pink.400' focusBorderColor='pink.400' onChange={changeFn}{...props}></Input>
);
