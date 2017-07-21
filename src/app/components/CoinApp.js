import React from 'react';
import Header from './Header.js';
import Error from './Error.js';
import Input from './Input.js';

export default class CoinApp extends React.Component{
	constructor(props){
		super(props);
		this.state = {Error : null, Output: null};
		this.validateInput = this.validateInput.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	validateInput(input){
		//TODO: Validation
	}

	handleKeyDown(event){
		
		console.log(event.keyCode);
		console.log(event.target)
	}

	render(){
		return(
			<div>
			<Header />
				<Error errorMessage={this.state.Error} />
				<Input handleKeyDown={() => this.handleKeyDown} />
			</div>
		)
	}
}