import { TextInput } from './ui/TextInput';
import { useState } from 'react';
import { DrinkList } from './DrinkList';
import { availableDrinks } from '../utils/data';

export const DrinkSearch = () => {
    const [searchField, setSearchField] = useState('test');
    return (
        <>
            <label> Search for drinks: </label>
            <TextInput />
            <DrinkList drinks={availableDrinks} />
            <p>{searchField}</p>

        </>
    )
}



