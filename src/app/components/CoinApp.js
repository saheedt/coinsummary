import React from 'react';
import Header from './Header.js';
import Error from './Error.js';
import Input from './Input.js';
import Output from './Output.js';

export default class CoinApp extends React.Component{
	constructor(props){
		super(props);
		this.state = {Error : null, Output: false};
		this.toOuput = null;
		this.validateInput = this.validateInput.bind(this);
		this.parseInput = this.parseInput.bind(this);
		this.convertToPennies = this.convertToPennies.bind(this);
		this.calculatePenniesNeeded = this.calculatePenniesNeeded.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.sterlingCoins = [{value: 200, symbol:'£2'},{value: 100, symbol:'£1'},
						{value: 50, symbol: '50p'},{value: 20, symbol:'20p'},
						{value: 10, symbol:'10p'}, {value: 5, symbol:'5p'},
						{value: 2, symbol:'2p'}, {value: 1, symbol:'1p'}]
	}

	validateInput(input){
		//TODO: Validation
		let splitPoint = input.split(".");
		if(splitPoint.length > 1 && splitPoint[0].includes('p') || splitPoint.length > 1 && splitPoint[1].includes('£')){

			return {"validationError": 'valid character in the wrong position'}

		}else if(splitPoint.length > 1 && !splitPoint[0].includes('£') /*|| splitPoint.length > 1 && !splitPoint[1].includes('p')*/){

			return {"validationError": 'invalid input'}

		}else if(splitPoint.length <= 1 && !splitPoint[0].includes('p')){

			return {"validationError": 'invalid input'}

		}
		if(/[^£.p\d]/.test(input)){

			return {"validationError": 'invalid character'}

		}
		if(!/\d+/g.test(input)){
			
			return {"validationError": 'missing value'}

		}

		return {"validationPass": input}
	}

	parseInput(input){
		let parsed;
		if(input.includes('£')){
			parsed = input.replace(/[\£\p\s\n\t\r]+/g, '');
			parsed = parseFloat(parsed);
			parsed = parsed.toFixed(2);
			return parsed;
		}
		parsed = input.replace(/[\£\p\s\n\t\r]+/g, '');
		parsed = parseInt(parsed);
		return parsed;
		
	}
	convertToPennies(input){
		return input * 100;
	}

	calculatePenniesNeeded(input){
		let output = [] , temp;
		temp = this.sterlingCoins.map((coin, index)=>{
			let calculation;
			 calculation = {"amount": Math.floor(input / coin.value), "index": index, "remainder": input %= coin.value};
			 return calculation
		});
		temp.map((calculation, key) => {
			if(calculation.amount !== 0 && calculation.index === key){
				return output.push({"coin": this.sterlingCoins[key].symbol, "amountneeded": calculation.amount})
			}
		});
		return output
	}


	handleKeyDown(event){
		let validate, parse, convert, calculateNeeded, inputValue;
		inputValue = document.getElementById('amountInput').value;
		if(event.keyCode === 13){
			validate = this.validateInput(inputValue);
			if(validate.validationError){
				this.toOuput = null; 
				this.setState({
					Error: validate.validationError
				});
				return;
			}
			parse = this.parseInput(inputValue);
			convert = this.convertToPennies(parse);
			calculateNeeded = this.calculatePenniesNeeded(convert);
			this.toOuput = calculateNeeded.map((output, index)=>{
				if(index % 2 === 0){
					return <Output key={index} coinNeeded={output.amountneeded} coinValue={output.coin} oddEven={"evenItem"}/>
				}else{
					return <Output key={index} coinNeeded={output.amountneeded} coinValue={output.coin} oddEven={"oddItem"}/>
				}
			});
			(this.state.Error !== null) ? (
				this.setState({
					Output: true, Error : null
				})
			) : (
				this.setState({
					Output: true
				})
			)
			
		}		
	}

	render(){
		return(
			<div>
				<Header />

				<div id="errorContainer" >
					<Error errorMessage={this.state.Error} />
				</div>

				<div id="inputContainer">
					<Input handleKeyDown={() => this.handleKeyDown} />
				</div>
				<div id="ouputContainer">
					<center><ul>{this.toOuput}</ul></center>
				</div>
			</div>
		)
	}
}