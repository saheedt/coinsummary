import React from 'react';

export default class Header extends React.Component {
	constructor(props){
		/**
   		* Component for displaying page header.
   		*/
		super(props);
	}

	render(){
		return (

			<nav>
				<div id="headerTitleHolder">
					<small>COIN SUMMARY</small>
				</div>
			</nav>

			)
	}
}