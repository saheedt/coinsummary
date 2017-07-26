import React from 'react';
import { shallow } from 'enzyme';

import Input from '../src/app/components/Input.js';

describe('<Input />', ()=>{
	const wrapper = shallow(<Input />);

	test('rendered tags', ()=>{
		expect(wrapper.find('div')).toHaveLength(1);
		expect(wrapper.find('#label-1')).toHaveLength(1);
		expect(wrapper.find('#label-2')).toHaveLength(1);
		expect(wrapper.find('#amountInput')).toHaveLength(1);

	});
});