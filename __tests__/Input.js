import React from 'react';
import { shallow } from 'enzyme';
import Input from '../src/app/components/Input.js';


describe('<Input />', ()=>{
	const wrapper = shallow(<Input />);

	test('Should have specified tags', () => {
		expect(wrapper.find('h4')).toHaveLength(2)
		expect(wrapper.find('center')).toHaveLength(1)
		expect(wrapper.find('input')).toHaveLength(1)
		expect(wrapper.find('div')).toHaveLength(2)
	})
});