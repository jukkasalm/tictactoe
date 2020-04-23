import React from 'react';
import { shallow, mount } from 'enzyme';
import TicTacToe from './TicTacToe';

it('renders without crashing', () => {
  mount(<TicTacToe />);
});