import React from "react";
import {Alert} from "react-bootstrap";

interface PropsType {
	message: string;
	variant: string;
}

const AlertBanner = ({message, variant}: PropsType) => {
	const alertMessage = message || 'An unexpected error occurred. Please try again later.';
	const alertVariant = variant || 'danger';
	return(
		<Alert variant={alertVariant} style={{backgroundColor: 'red'}}>{alertMessage}</Alert>
	)
}

export default AlertBanner;
