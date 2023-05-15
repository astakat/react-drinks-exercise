import './DrinkItem.css'
import { Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Circle } from '@chakra-ui/react'



export const DrinkItem = ({ drink, clickFn }) => {
    return (
        <Circle bg='pink' className="drink-item" onClick={() => clickFn(drink)}>
            <Image borderRadius='full' boxSize='150px' src={drink.imgUrl} w={50} h={50} alt={drink.alt} />
            <Text m={9} color='pink.700'>{drink.name}</Text>
        </Circle>
    );
};