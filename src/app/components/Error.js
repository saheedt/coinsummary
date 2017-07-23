import React from 'react';

export default class Error extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
			<center><span id="errorMsg">{this.props.errorMessage}</span></center>
		)
	}

}