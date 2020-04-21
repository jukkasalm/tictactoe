import React, { useState } from 'react';
import Square from './Square';

import boardStyles from './Board.module.scss';

/*

	A game board component

*/

const Board = () => {

	// a board state
	// (creates an array of nine squares, filled with null values)
	const [squares, setSquares] = useState(Array(9).fill(null));

	// a turn state
	// (a simple boolean to see whose turn it is next)
	const [xIsNext, setXIsNext] = useState(true);

	// a handleClick function
	// (takes in an index of the clicked item)
	const handleClick = index => {

		// makes a copy of the board state
		const squaresCopy = [...squares];
		
		// return if square already has a value or if the game is over
		if (squaresCopy[index] || isWinner(squares)) return; 

		// adds an X or O to the copy
		squaresCopy[index] = xIsNext ? 'X' : 'O'; 

		// sets the state of the board and turn
		// (replaces board state with the new mutated board state)
		setSquares(squaresCopy);

		// sets whose turn it is next
		// (toggles boolean)
		setXIsNext(!xIsNext);
	};

	// Render single square
	const renderSquare = index => {
		return (
			<Square value={squares[index]} onClick={() => handleClick(index)} />
		)
	};

	// Check if a winner exists
	const isWinner = (squares) => {
		const lines = [
			// Horizontal
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			// Vertical
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			// Diagonal
			[0, 4, 8],
			[2, 4, 6],
		]

		// Loop through winning lines
		for (let i = 0; i < lines.length; i++) {

			// Match array format
			let [a, b, c] = lines[i];

			// Compare winning lines to squares array from state
			if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
				return squares[a];
			}
		}

		// Return nothing by default
		return null;
	};

	// Find out if game is over, returns boolean
	const gameWinner = isWinner(squares);


	// show stalemate result if there are no empty squares and no game winner, otherwise show game status
	let gameStatus; 
	if (!squares.includes(null) && !gameWinner) {
		gameStatus = 'Stalemate!';
	} else {
	 	gameStatus = gameWinner ? `${gameWinner} wins!` : `Next player: ${xIsNext ? 'X' : 'O'}`
	};

	return (
		<div className={boardStyles.base}>
			<div className={boardStyles.board} data-status={gameStatus}>
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>
			<div className={boardStyles.gameStatus}>
				{gameStatus}
			</div>
			<button className={boardStyles.restart} onClick={() => setSquares(Array(9).fill(null))} >
				Restart game
			</button>
		</div>
	)
};

export default Board;