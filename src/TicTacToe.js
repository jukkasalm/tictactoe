import React from 'react';
import Board from './components/Board';

import gameStyles from './TicTacToe.module.scss';

const TicTacToe = () => {
	return (
		<div className={ gameStyles.base }>
			<Board />
		</div>
	)
};

export default TicTacToe;