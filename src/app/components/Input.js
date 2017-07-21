import React from 'react';

export default class Input extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(

			<div>
				<input tabIndex="0" onKeyDown={this.props.handleKeyDown(event)} type="text" id="amountInput" className="form-control" placeholder="amount" name="amount" />

			</div>

		)
	}
}