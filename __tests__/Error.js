import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Error from '../src/app/components/Error.js';

Enzyme.configure({ adapter: new Adapter() });

describe('<Error />', ()=>{
	const wrapper = shallow(<Error errorMessage={'test component'}  />);

	test('should have span tag with id errorMsg', () => {
		expect(wrapper.find('#errorMsg')).toHaveLength(1)
	});
	test('prop value', ()=>{
		expect(wrapper.props('errorMessage')).toBeDefined()
	})
});