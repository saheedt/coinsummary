import React from 'react';

const Error = (props) => (
	/**
   	* Component for displaying error message.
   	* @prop {string} errorMessage
  */
	<center><span id="errorMsg">{props.errorMessage}</span></center>
);
export default Error