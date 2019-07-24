import React from 'react';
import Enzyme, { mount , shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import CoinApp from '../src/app/components/CoinApp.js';

Enzyme.configure({ adapter: new Adapter() });

describe('<CoinApp />', () => {
	let wrapper;

	beforeEach(() => {
    wrapper = mount(<CoinApp />);
	});

	test('should display correctly', () => {
		expect(wrapper.find('h4')).toHaveLength(2);
		expect(wrapper.find('nav')).toHaveLength(1);
		expect(wrapper.find('p')).toHaveLength(1);
		expect(wrapper.find('#error-container-empty')).toHaveLength(1);
	});

	test('should calculate & display output', () => {
		const input = wrapper.find("input[type='text']");
		input.getDOMNode().value = '£2.12';
		input.simulate('keyDown', { keyCode: 13 });
		expect(wrapper.find('li')).toHaveLength(3);
	});

	test('should display error appropriately', () => {
		const input = wrapper.find("input[type='text']");
		input.getDOMNode().value = 'p2.12';
		input.simulate('keyDown', { keyCode: 13 });
		expect(wrapper.find('#errorContainer')).toHaveLength(1);
		expect(wrapper.find('#errorMsg')).toHaveLength(1);
		expect(wrapper.find('#errorContainer center #errorMsg').text()).toEqual('valid character in the wrong position');
	});

})
