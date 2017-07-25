import React from 'react';

export default class Input extends React.Component{
	constructor(props){
		/**
   		* Component for displaying input field.
   		* @prop {function} handleKeyDown
   		*/
		super(props);
	}

	render(){
		return(
			<div>
				<h4 id="label-1">Enter Amount of Pennies</h4>
					<center>
						<input tabIndex="0" ref="input" onKeyDown={this.props.handleKeyDown(event)} type="text" id="amountInput" className="form-control" placeholder="amount" name="amount" />
					</center>
				<h4 id="label-2">For example: 92p, £2.12</h4>
			</div>
		)
	}
}