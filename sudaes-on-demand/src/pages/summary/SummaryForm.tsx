import React, {useCallback, useState} from "react";
import {Form, Button} from "react-bootstrap";

const SummaryForm = () => {
	const [isChecked, setIsChecked] = useState(false);

	const checkboxLabel = (
		<span>
			I agree to <span style={{ color: 'blue' }}>Terms and Conditions</span>
		</span>
	)
	const onChangeCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setIsChecked(e.target.checked);
	}, []);
	const onClickConfirm = useCallback(() => {

	}, []);

	return (
		<Form>
			<Form.Group controlId='terms-and-conditions'>
				<Form.Check
					type='checkbox'
					checked={isChecked}
					onChange={onChangeCheck}
					label={checkboxLabel}
				/>
			</Form.Group>
			<Button variant='primary' type='submit' onClick={onClickConfirm} disabled={!isChecked}>Confirm order</Button>
		</Form>
	)
}

export default SummaryForm;
