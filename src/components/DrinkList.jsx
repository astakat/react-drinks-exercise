import { DrinkItem } from "./DrinkItem"

// export const DrinkList = ({ drinks }) => {
//     return (
//         <>
//             {drinks.map((drink) => (
//                 <DrinkItem key={drink.id} drink={drink} />
//             ))}
//         </>
//     )
// }


export const DrinkList = ({ drinks }) => {
    const drinkListItems = drinks.map((drink) => (<DrinkItem key={drink.id} drink={drink} />))

    return (
        <ul>
            {drinkListItems}
        </ul>
    )
}