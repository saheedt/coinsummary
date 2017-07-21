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
		this.coins = [{value: 200, symbol:'£2'},{value: 100, symbol:'£1'},
						{value: 50, symbol: '50p'},{value: 20, symbol:'20p'},
						{value: 10, symbol:'10p'}, {value: 5, symbol:'5p'},
						{value: 2, symbol:'2p'}, {value: 1, symbol:'1p'}]
	}

	validateInput(input){
		//TODO: Validation
		let splitPoint = input.split(".");
		if(splitPoint > 1 && splitPoint[0].includes('p') || splitPoint > 1 && splitPoint[1].includes('£')){
			this.setState({
				Error: 'valid character in the wrong position'
			});
		}
		if(/[^£.p\d]/.test(input)){
			this.setState({
				Error: 'invalid character'
			});
			return;
		}
		if(!/\d+/g.test(input)){
			this.setState({
				Error: 'missing value'
			});
			return;
		}
	}

	parseInput(input){
		let parsed;
		if(input.includes('£')){
			parsed = input.replace(/[\£\p]+/g, '');
			parsed = parseFloat(parsed);
			parsed = parsed.toFixed(2) * 100;
			//return parsed;
		}else{
			parsed = input.replace(/[\£\p]+/g, '');
			parsed = parseInt(parsed);
			//return parsed;
		}
	}

	calculate(input){

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