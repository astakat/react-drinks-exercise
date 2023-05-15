import { TextInput } from './ui/TextInput';
import { useState } from 'react';
import { DrinkList } from './DrinkList';
import { availableDrinks } from '../utils/data';


export const DrinkSearch = ({ clickFn }) => {
    const [searchField, setSearchField] = useState('');

    const matchedDrinks = availableDrinks.filter((drink) => {
        return drink.name.toLowerCase().includes(searchField.toLowerCase());
    });

    const handleChange = (event) => {
        setSearchField(event.target.value);
    };

    return (
        <>
            <label rowSpan={2} colSpan={1} > Search for drinks: </label>
            <TextInput changeFn={handleChange} m={10} />
            <DrinkList clickFn={clickFn} drinks={matchedDrinks} />
            {/* <p>{searchField}</p> */}

        </>
    )
}



