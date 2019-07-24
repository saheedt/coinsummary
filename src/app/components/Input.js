import React from 'react';

const Input = ({keydownHandler, inputRef }) => (
	/**
	* Component for displaying input field.
	*	@prop {function} keydownHandler
	*/
	<div>
		<h4 id="label-1">Enter Amount of Pennies</h4>
			<center>
				<input type="text" id="amountInput" ref={inputRef} className="form-control" placeholder="pennies amount" name="amount" onKeyDown={keydownHandler} />
			</center>
		<h4 id="label-2">For example: 92p, £2.12</h4>
	</div>
);

export default Input
