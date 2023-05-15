// import { Button } from './ui/Button.jsx'
import { SimpleGrid, Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Button as CButton } from '@chakra-ui/react'
import React from 'react'

export const DrinkChoice = ({ drink, clickFn }) => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	const [size, setSize] = React.useState('md')


	const handleSizeClick = (newSize) => {
		setSize(newSize)
		onOpen()
	}

	// const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']

	return (
		<>
			<Text fontSize='6xl' color='pink.500'>Your choice: {drink.name}</Text>
			<Image src={drink.imgUrl} boxSize='100px'
				objectFit='cover' alt={drink.alt} />
			<Text>Your drink will be ready in a few minutes</Text>
			<SimpleGrid mt={4}>
				<CButton onClick={onOpen} mr={4} colorScheme='pink'>
					Confirm order please
				</CButton>
				<CButton onClick={() => clickFn()} variant="ghost" colorScheme='pink'>
					Change selection
				</CButton>
				<Modal size={['full', 'md']} isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>Is this really what you want?</ModalHeader>
						<ModalCloseButton />
						<ModalBody
							height={['full', 'fit-content']} display="flex" justifyContent="center" alignItmes={['center', 'flex-start']} flexDir="column"
						>
							<Text>
								Please confirm drink
							</Text>
						</ModalBody>

						<ModalFooter>
							<CButton colorScheme='pink' mr={3} onClick={onClose}>
								Close
							</CButton>

						</ModalFooter>
					</ModalContent>
				</Modal>
			</SimpleGrid>

		</>
	);
};
