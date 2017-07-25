import React from 'react';
import { shallow } from 'enzyme';
import Output from '../src/app/components/Output.js';

describe('<Output />', ()=>{
	const wrapper = shallow(<Output />);

	test('component <li> tag', ()=>{
		expect(wrapper.find('li')).toHaveLength(1)
	})

});