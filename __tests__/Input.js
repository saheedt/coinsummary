import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from '../src/app/components/Input.js';

Enzyme.configure({ adapter: new Adapter() });

describe('<Input />', () => {
	let wrapper;
	const props = { keydownHandler: jest.fn() };

	beforeEach(() => {
    wrapper = shallow(<Input {...props} />);
	});

	afterEach(() => {
    jest.clearAllMocks();
  });

	test('rendered tags', () => {
		expect(wrapper.find('div')).toHaveLength(1);
		expect(wrapper.find('#label-1')).toHaveLength(1);
		expect(wrapper.find('#label-2')).toHaveLength(1);
		expect(wrapper.find('#amountInput')).toHaveLength(1);
	});

	test('should call the right event handler', () => {
		const input = wrapper.find("input[type='text']");
		input.simulate('keyDown', { keyCode: 13 });
		expect(props.keydownHandler).toHaveBeenCalledTimes(1);
	});
});