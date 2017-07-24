import React from 'react';
import { shallow } from 'enzyme';
import CoinApp from '../src/app/components/CoinApp.js';

describe('CoinApp component default state.', ()=>{
	const wrapper = shallow(<CoinApp />);
	const validateInput = wrapper.instance().validateInput;
	const parseInput = wrapper.instance().parseInput;
	const convertToPennies = wrapper.instance().convertToPennies;
	const calculatePenniesNeeded = wrapper.instance().calculatePenniesNeeded;
	const calculateNeededOut = [{"coin": '£2', "amountneeded": 6},{"coin": '10p', "amountneeded": 1},{"coin": '1p', "amountneeded": 1}];

	test('component methods',()=>{
		expect(validateInput('£12.11')).toEqual({"validationPass": "£12.11"});
		expect(parseInput('£12.11')).toEqual({"parsed": "12.11", "isPounds": true});
		expect(convertToPennies({"parsed": 12.11, "isPounds": true})).toEqual(1211);
		expect(calculatePenniesNeeded(1211)).toEqual(calculateNeededOut);
	});
	test('state should be at default', ()=>{
		expect(wrapper.state().Error).toBe(null);
		expect(wrapper.state().Output).toBe(false);
	});

	test('Should have 1 div tag', () => {
		expect(wrapper.find('div')).toHaveLength(5)
	});
	test('should have div with id error-container-empty', () => {
		expect(wrapper.find('#error-container-empty')).toHaveLength(1);
	});
})
