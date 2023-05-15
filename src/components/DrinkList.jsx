import { DrinkItem } from "./DrinkItem"
import { SimpleGrid } from '@chakra-ui/react'

export const DrinkList = ({ drinks, clickFn }) => {
    console.log("click")
    return (
        <SimpleGrid columns={2} spacing={10}>
            {drinks.map((drink) => (
                <DrinkItem key={drink.id} drink={drink} clickFn={clickFn} />
            ))}
        </SimpleGrid>
    )
}


// export const DrinkList = ({ drinks, clickFn }) => {
//     const drinkListItems = drinks.map((drink) => (<DrinkItem key={drink.id} drink={drink} clickFn={clickFn} />))

//     return (
//         <ul>
//             {drinkListItems}
//         </ul>
//     )
// }