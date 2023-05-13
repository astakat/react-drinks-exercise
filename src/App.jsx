import { useState } from 'react';
import './App.css';
import { DrinkChoice } from './components/DrinkChoice';
import { DrinkSearch } from './components/DrinkSearch';


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
					<h2>{greeting}</h2>
					<DrinkSearch clickFn={setUserDrink} />
				</>
			)
			}

		</div >
	);
};


