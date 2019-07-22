import React from 'react';

const Output = (props) => (
	/**
   	* Component for displaying calculated sterling coins needed.
   	* @prop {string} coinNeeded, coinValue and oddEven
	*/
	<li className = {props.oddEven}> {props.coinNeeded} X {props.coinValue} </li>
);
export default Output