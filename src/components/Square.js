import React from 'react';

import squareStyles from './Square.module.scss';
	
/*

	A square component
	- has a value inside the square that takes in props
	- has an onClick function that takes in props

*/

const Square = ({ value, onClick }) => (
	<button className={squareStyles.button} onClick={onClick} data-value={value}>
		{value}
	</button>
);


export default Square;