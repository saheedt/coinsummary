import React from 'react';
import { shallow } from 'enzyme';
import Error from '../src/app/components/Error.js';

describe('<Error />', ()=>{
	const wrapper = shallow(<Error errorMessage={'test component'}  />);

	test('should have span tag with id errorMsg', () => {
		expect(wrapper.find('#errorMsg')).toHaveLength(1)
	});
	test('prop value', ()=>{
		expect(wrapper.props('errorMessage')).toBeDefined()
	})
});