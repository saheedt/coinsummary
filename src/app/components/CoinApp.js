import React from 'react';
import Header from './Header.js'

export default class CoinApp extends React.Component{
	constructor(props){
		super(props);
		this.state = {Error : null, Output: null};
		this.validateInput: this.validateInput.bind(this);
	}

	validateInput(input){
		//TODO: Validation
	}

	render(){
		return(
			<div>
			<Header />
			</div>
		)
	}
}