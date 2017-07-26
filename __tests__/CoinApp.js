import React from 'react';
import { mount , shallow } from 'enzyme';
import sinon from 'sinon';
import CoinApp from '../src/app/components/CoinApp.js';

describe('<CoinApp /> component default state.', ()=>{
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
	test('should have <div> tag with id #error-container-empty', () => {
		expect(wrapper.find('#error-container-empty')).toHaveLength(1);
	});
})

describe('<CoinApp /> component on state change.', ()=>{
	const wrapper = shallow(<CoinApp />);

	test('should have <div> tag with id #errorContainer', ()=>{
		wrapper.instance().setState({Error: 'valid character in the wrong position'});

		expect(wrapper.find('#error-container-empty')).toHaveLength(0);
		expect(wrapper.find('#errorContainer')).toHaveLength(1);
	})
})

describe('<CoinApp /> keypress simulation', ()=>{
	sinon.spy(CoinApp.prototype, 'handleKeyDown');
	const wrapper = mount(<CoinApp />, {attachTo: document.getElementById('root')});

    test('simulate keydown event', ()=>{
    	window.keypress();
    	expect(CoinApp.prototype.handleKeyDown.calledOnce).toEqual(true);
    	wrapper.unmount();
    });
});