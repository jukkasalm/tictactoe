import React from 'react';
import Board from './components/Board';

import gameStyles from './TicTacToe.module.scss';

const TicTacToe = () => {
	return (
		<div className={ gameStyles.root }>
			<h1 className={ gameStyles.heading }>Tic Tac Toe in React</h1>
			<Board />
		</div>
	)
};

export default TicTacToe;