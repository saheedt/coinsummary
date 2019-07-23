import React from 'react';

const Error = ({errorMessage}) => (
	/**
   	* Component for displaying error message.
   	* @prop {string} errorMessage
  */
	<center><span id="errorMsg">{errorMessage}</span></center>
);
export default Error