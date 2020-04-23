import React from 'react';
import { mount } from 'enzyme';
import TicTacToe from './TicTacToe';

it('renders without crashing', () => {
	mount(<TicTacToe />);
});