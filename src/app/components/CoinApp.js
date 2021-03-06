import React, { useState, useCallback, useRef } from 'react';
import Header from './Header.js';
import Error from './Error.js';
import Input from './Input.js';
import Output from './Output.js';

let toOuput = null;
const sterlingCoins = [
	{value: 200, symbol:'£2'},{value: 100, symbol:'£1'},
	{value: 50, symbol: '50p'},{value: 20, symbol:'20p'},
	{value: 10, symbol:'10p'},{value: 5, symbol:'5p'},
	{value: 2, symbol:'2p'},{value: 1, symbol:'1p'}
];
const validateInput = (input) => {
	/**
		 * Validates if input pennies amount string meets requirements.
		 * £ and p characters in appropriate places, contains '£' symbol once penny value is supplied, contains 'p' if '£' is not supplied, contains digits.
		 * @param {String} input
		 * @return {object}
		 */
	let splitPoint = input.split(".");
	if (splitPoint.length > 1 && splitPoint[0].includes('p') || splitPoint.length > 1 && splitPoint[1].includes('£')) {

		return {"validationError": 'valid character in the wrong position'}

	} else if (splitPoint.length > 1 && !splitPoint[0].includes('£')) {

		return {"validationError": 'invalid input'}

	} else if (splitPoint.length > 1 && !/\d+/g.test(splitPoint[1])){

		return {"validationError": 'invalid input'}

	}
	else if ( splitPoint.length <= 1 ) {
		if ( !splitPoint[0].includes('£')  && !splitPoint[0].includes('p') ) {

			return {"validationError": 'invalid input'}
		}

		if ( splitPoint[0].includes('£') && splitPoint[0].includes('p') ) {

			return {"validationError": 'invalid input'}
		}
	}

	if (/[^£.p\d]/.test(input)) {

		return {"validationError": 'invalid character'}

	}
	if (!/\d+/g.test(input)) {
		
		return {"validationError": 'missing value'}

	}

	return {"validationPass": input}
};

const parseInput = (input) => {
	/**
		 * parses input pounds/pennies amount string to rid it of un-needed characters.
		 * Removes characters '£', 'p' and white space .
		 * @param {string} input
		 * @return {Object}
		 */
	let parsed;
	if(input.includes('£')) {
		parsed = input.replace(/[\£\p\s\n\t\r]+/g, '');
		parsed = parseFloat(parsed);
		parsed = parsed.toFixed(2);
		return {"parsed": parsed, "isPounds": true};
	}
	parsed = input.replace(/[\£\p\s\n\t\r]+/g, '');
	parsed = parseInt(parsed);
	return {"parsed": parsed, "isPounds": false};
};

const convertToPennies = (input) => {
	/**
		 * converts parsed pounds/pennies Float/int into it's pennies equivalent
		 * @param {object} input
		 * @return {Float} or {int} input
		 */
		 if(input.isPounds) {
			 return input.parsed * 100
		 }
	return input.parsed
};

const calculatePenniesNeeded = (input) => {
	/**
		 * calculates the amount of sterling coins needed from the converted pennies amount
		 * Divides converted pennies amount by the penny equivalent of a sterling coin thereby
			 finding how many times a sterling coin can divide the input penny equivalent.
		 * The remainder is returned and the new input pennies amount and another division occurs
			 with penny equivalent of the next sterling coin.
		 * The division continues till zero (0) is reached.
		 * @param {Float} or {int} input
		 * @return {Array} output
		 */
	let output = [] , temp;
	temp = sterlingCoins.map((coin, index) => {
		let calculation;
		 calculation = {"amount": Math.floor(input / coin.value), "index": index, "remainder": input %= coin.value};
		 return calculation
	});
	temp.map((calculation, key) => {
		if(calculation.amount !== 0 && calculation.index === key){
			return output.push({"coin": sterlingCoins[key].symbol, "amountneeded": calculation.amount})
		}
	});
	return output
};


const CoinApp = () => {
	const [error, setError] = useState(null);
	const [output, setOutput] = useState(false);

	const inputRef = useRef();
	const handleKeyDown = useCallback((e) => {
		/**
			 * KeyDown event handler.
			 * listens for the press of the enter key.
			 * value of pounds amount is passed into the validateInput method
			 * returned value from the validateInput method is passed into the parseInput method
			 * returned value is from the parseInput is passed into the convertToPennies method
			 * returned value from the convertToPennies is passed into the calculatePenniesNeeded method
			 * output state is set to true if no error occured or Error state set to error equivalent if error occured.
			 * state change triggers app reload/update. 
			 * @param {event object} 
			 * @return void
			 */
		let validate, parse, convert, calculateNeeded, inputValue;
		inputValue = inputRef.current.value;
		if(e.keyCode === 13) {
			validate = validateInput(inputValue);
			if (validate.validationError) {
				toOuput = null; 
				setError(validate.validationError);
				return;
			}
			parse = parseInput(inputValue);
			convert = convertToPennies(parse);
			calculateNeeded = calculatePenniesNeeded(convert);
			toOuput = calculateNeeded.map((outputItem, index) => {
				if (index % 2 === 0) {
					return <Output key={index} coinNeeded={outputItem.amountneeded} coinValue={outputItem.coin} oddEven={"evenItem"} />
				} else {
					return <Output key={index} coinNeeded={outputItem.amountneeded} coinValue={outputItem.coin} oddEven={"oddItem"} />
				}
			});
			if (error) {
				setOutput(toOuput);
				setError(null);
			} else {
				setOutput(toOuput);
			}
		}
	}, [error, output]);

	return (
		<div>
			<Header />
			{
				(!error)
				? (	<div id="error-container-empty"></div>	)
				: (
					<div id="errorContainer" >
						<Error errorMessage={error} />
					</div>
				)
			}
			<div id="inputContainer">
				<Input inputRef={inputRef} keydownHandler={handleKeyDown} />
			</div>

			<div id="ouputContainer">
			{/* <label id="result-label">Results: </label> */}
				<center><ul>{toOuput}</ul></center>
			</div>
			<div id="instruction-container">
				<p>Supply an amount in pennies, it will calculate the minimum number of sterling coins needed to makeup the supplied amount.</p>
			</div>
		</div>
	);
};

export default CoinApp;
