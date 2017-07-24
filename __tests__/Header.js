import React from 'react';
import { shallow } from 'enzyme';
import Header from '../src/app/components/Header.js';


describe('<Header />', ()=>{
	const wrapper = shallow(<Header />)

	test('should have div tag with id = headerTitleHolder', ()=>{
		expect(wrapper.find('#headerTitleHolder')).toHaveLength(1)
	});
	test('should have 1 nav tag', ()=>{
		expect(wrapper.find('nav')).toHaveLength(1)
	})
});