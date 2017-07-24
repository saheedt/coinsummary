import React from 'react';

export default class Error extends React.Component {

	constructor(props){
		/**
   		* Component for displaying error message.
   		* @prop {string} errorMessage
   		*/
		super(props);
	}

	render(){
		return(
			<center><span id="errorMsg">{this.props.errorMessage}</span></center>
		)
	}

}