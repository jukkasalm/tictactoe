import React from 'react';
import Board from './components/Board';

import gameStyles from './TicTacToe.module.scss';

const TicTacToe = () => {
	return (
		<div className={ gameStyles.root }>
			<h1 className={ gameStyles.heading }>Tic Tac Toe in React</h1>
			<Board />
			<a className={ gameStyles.link } href="https://github.com/jukkasalm/tictactoe" target="_blank" rel="noopener noreferrer">Source code in Github 🡕</a>
		</div>
	)
};

export default TicTacToe;