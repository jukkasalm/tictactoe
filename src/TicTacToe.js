import React from 'react';

import gameStyles from './TicTacToe.module.scss';

function TicTacToe() {
	return (
		<div className={ gameStyles.base }>
			TicTacToe
		</div>
	)
};

/*

Requirements:
---

* A game board component, which has
	- a game state, which has
		- a board state
		- a turn state
	- a handleClick function 
		- makes a copy of the board state
		- adds an X or O to the copy
		- calculates what the next turn is
		- sets the state of the board and turn
	- a function that calculates the winner
	
* A square component
	- has a value inside the square that takes in props
	- has an onClick function that takes in props

*/

export default TicTacToe;