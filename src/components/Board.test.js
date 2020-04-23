import React from "react";
import Board from './Board';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
	mount(<Board />);
});

describe('<Board />', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mount(<Board/>);
	});

	it('renders a correct amount of squares', () => {
		expect(wrapper.find('.board').children()).toHaveLength(9);
	}); 

	it('renders the correct starting player', () => {
		expect(wrapper.find('.gameStatus').text()).toBe('Next player: X');
	});

	it('renders change in player status when a square is clicked', () => {
		const squareButton = wrapper.find('button.button').at(0);
		squareButton.simulate('click');
		expect(wrapper.find('.gameStatus').text()).toBe('Next player: O');
	});

	it('renders the correct status after X wins', () => {
		const move1 = wrapper.find('button.button').at(0);
		move1.simulate('click');
		const move2 = wrapper.find('button.button').at(4);
		move2.simulate('click');
		const move3 = wrapper.find('button.button').at(1);
		move3.simulate('click');
		const move4 = wrapper.find('button.button').at(5);
		move4.simulate('click');
		const move5 = wrapper.find('button.button').at(2);
		move5.simulate('click');
		expect(wrapper.find('.gameStatus').text()).toBe('X wins!');
	});

	it('renders the correct status after O wins', () => {
		const move0 = wrapper.find('button.button').at(7);
		move0.simulate('click');
		const move1 = wrapper.find('button.button').at(0);
		move1.simulate('click');
		const move2 = wrapper.find('button.button').at(4);
		move2.simulate('click');
		const move3 = wrapper.find('button.button').at(1);
		move3.simulate('click');
		const move4 = wrapper.find('button.button').at(5);
		move4.simulate('click');
		const move5 = wrapper.find('button.button').at(2);
		move5.simulate('click');
		expect(wrapper.find('.gameStatus').text()).toBe('O wins!');
	});

	it('renders the correct status on stalemate', () => {
		const move0 = wrapper.find('button.button').at(0);
		move0.simulate('click');
		const move1 = wrapper.find('button.button').at(3);
		move1.simulate('click');
		const move2 = wrapper.find('button.button').at(1);
		move2.simulate('click');
		const move3 = wrapper.find('button.button').at(4);
		move3.simulate('click');
		const move4 = wrapper.find('button.button').at(5);
		move4.simulate('click');
		const move5 = wrapper.find('button.button').at(2);
		move5.simulate('click');
		const move6 = wrapper.find('button.button').at(6);
		move6.simulate('click');
		const move7 = wrapper.find('button.button').at(8);
		move7.simulate('click');
		const move8 = wrapper.find('button.button').at(7);
		move8.simulate('click');
		expect(wrapper.find('.gameStatus').text()).toBe('Stalemate!');
	});

	it('clears the board on restart', () => {
		const restartButton = wrapper.find('button.restart');
		restartButton.simulate('click');
		wrapper.find('button.button').forEach((node) => {
			expect(node.prop('data-value')).toBe(null);
		});
	});
});