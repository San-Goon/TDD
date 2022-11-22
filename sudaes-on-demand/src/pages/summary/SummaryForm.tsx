import React, {useCallback, useState} from "react";
import {Form, Button} from "react-bootstrap";

const SummaryForm = () => {
	const [isChecked, setIsChecked] = useState(false);

	const onChangeCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setIsChecked(e.target.checked);
	}, []);
	const onClickConfirm = useCallback(() => {

	}, []);

	const checkboxLabel = (
		<span>
			I agree to
				<span
					className="d-inline-block"
					tabIndex={0}
					data-bs-toggle="popover"
					data-bs-trigger="hover focus"
					data-bs-content="no ice cream will actually be delivered">
					<span style={{ color: 'blue' }}>Terms and Conditions</span>
				</span>
		</span>
	)

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
