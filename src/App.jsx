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
				<DrinkChoice drink={userDrink} />
			) : (
				<>
					<h1>{greeting}</h1>
					<DrinkSearch />
				</>
			)}

		</div>
	);
};


	// return (
	// 	<div className="app">
	// 		{userDrink && <h1>{greeting}</h1>}
	// 		<DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
	// 		{userDrink && <DrinkChoice drink={userDrink} />}
	// 	</div>
	// );

