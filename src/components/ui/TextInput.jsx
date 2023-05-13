import { Input } from '@chakra-ui/react'

export const TextInput = ({ changeFn, ...props }) => <Input variant='filled' placeholder='Filled' htmlSize={30} color={'pink.500'} borderColor={'pink.500'} width='auto' type="text" onChange={changeFn} {...props} />;
