import React from 'react';
import Square from './components/Square';

import gameStyles from './TicTacToe.module.scss';

const TicTacToe = () => {
	return (
		<div className={ gameStyles.base }>
			<Square />
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

*/

export default TicTacToe;