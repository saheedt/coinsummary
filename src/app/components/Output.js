import React from 'react';


export default class Output extends React.Component{
	constructor(props){
		/**
   		* Component for displaying calculated sterling coins needed.
   		* @prop {string} coinNeeded, coinValue and oddEven
   		*/
		super(props);
	}


	render(){

		return(
			<li className = {this.props.oddEven}> {this.props.coinNeeded} X {this.props.coinValue} </li>
		)
	}
}