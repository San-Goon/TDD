import {fireEvent, render, screen} from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test('체크박스와 버튼 상호작용 테스트', () => {
	render(<SummaryForm />);
	const checkbox = screen.getByRole('checkbox');
	expect(checkbox).not.toBeChecked();
	const button = screen.getByRole('button');
	expect(button).toBeDisabled();
	fireEvent.click(checkbox);
	expect(button).toBeEnabled();
	fireEvent.click(checkbox);
	expect(button).toBeDisabled();
})
