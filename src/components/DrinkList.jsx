import { DrinkItem } from "./DrinkItem"

export const DrinkList = ({ drinks, clickFn }) => {
    console.log("click")
    return (
        <>
            {drinks.map((drink) => (
                <DrinkItem key={drink.id} drink={drink} clickFn={clickFn} />
            ))}
        </>
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