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

export default TicTacToe;