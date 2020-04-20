import React from 'react';

import boardStyles from './Board.module.scss';

/*

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

const Board = () => (
	<div>
		Board
	</div>
);

export default Board;