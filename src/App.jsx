import { useState } from 'react';
import './App.css';
import { DrinkChoice } from './components/DrinkChoice';
import { DrinkSearch } from './components/DrinkSearch';
import { Heading } from '@chakra-ui/react'

export const App = () => {

	const [userDrink, setUserDrink] = useState();

	console.log(userDrink)

	const greeting = 'Welcome to our cafe!';

	return (
		<div className="app">
			{userDrink ? (
				<DrinkChoice drink={userDrink} clickFn={setUserDrink} />
			) : (
				<>
					<Heading size="2xl" mb={9} color="pink.600">{greeting}</Heading>
					<DrinkSearch clickFn={setUserDrink} />
				</>
			)
			}

		</div >
	);
};


