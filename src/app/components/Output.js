import React from 'react';

const Output = ({oddEven, coinNeeded, coinValue}) => (
	/**
   	* Component for displaying calculated sterling coins needed.
		 * @prop {string} oddEven
		 * @prop {string} coinNeeded
		 * @prop {string} coinValue
	*/
	<li className = {oddEven}> {coinNeeded} X {coinValue} </li>
);
export default Output