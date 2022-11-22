import React from "react";
import {Col} from "react-bootstrap";

interface PropsType {
	name: string;
	imagePath: string;
}

const ScoopOption = ({name, imagePath}: PropsType) => {
	return (
		<Col xs={12} sm={6} md={4} lg={3} style={{textAlign: 'center'}}>
			<img style={{width: '75%'}} src={`http://localhost:3030/${imagePath}`} alt={`${name} scoop`} />
		</Col>
	)
}

export default ScoopOption;
