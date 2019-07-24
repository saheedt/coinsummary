import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../src/app/components/Header.js';

Enzyme.configure({ adapter: new Adapter() });

describe('<Header />', ()=>{
	const wrapper = shallow(<Header />)

	test('should have div tag with id = headerTitleHolder', ()=>{
		expect(wrapper.find('#headerTitleHolder')).toHaveLength(1)
	});
	test('should have 1 nav tag', ()=>{
		expect(wrapper.find('nav')).toHaveLength(1)
	})
});