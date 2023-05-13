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
            <p> Search for drinks: </p>
            <TextInput changeFn={handleChange} />
            <DrinkList clickFn={clickFn} drinks={matchedDrinks} />
            {/* <p>{searchField}</p> */}

        </>
    )
}



