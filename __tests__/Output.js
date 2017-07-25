import React from 'react';
import { shallow , mount } from 'enzyme';
import Output from '../src/app/components/Output.js';

describe('<Output />', ()=>{
	const wrapper = shallow(<Output />);

	test('component <li> tag', ()=>{
		expect(wrapper.find('li')).toHaveLength(1)
	})

	test('props values', ()=>{
		const wrapper = mount(<Output coinNeeded={12}  coinValue={'£2'} oddEven={'oddItem'} />);//key={3000} coinNeeded={12}  coinValue={'£2'} oddEven={'oddItem'}

		expect(wrapper.props().coinNeeded).toEqual(12);
		expect(wrapper.props().coinValue).toEqual('£2');
		expect(wrapper.props().oddEven).toEqual('oddItem');
		
		wrapper.setProps({coinNeeded: 16});
		wrapper.setProps({coinValue: '£1'});
		wrapper.setProps({oddEven: 'evenItem'});

		expect(wrapper.props().coinNeeded).toEqual(16);
		expect(wrapper.props().coinValue).toEqual('£1');
		expect(wrapper.props().oddEven).toEqual('evenItem');
	})

});