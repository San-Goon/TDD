import {render, screen} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test('체크박스와 버튼 상호작용 테스트', () => {
	render(<SummaryForm />);
	const checkbox = screen.getByRole('checkbox');
	expect(checkbox).not.toBeChecked();
	const button = screen.getByRole('button');
	expect(button).toBeDisabled();
	userEvent.click(checkbox);
	expect(button).toBeEnabled();
	userEvent.click(checkbox);
	expect(button).toBeDisabled();
});

// test('팝오버 테스트', () => {
// 	render(<SummaryForm />);
// 	const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
// 	expect(nullPopover).not.toBeInTheDocument();
// 	const termsAndConditions = screen.getByText(/Terms and Conditions/i);
// 	userEvent.hover(termsAndConditions);
// 	const popover = screen.getByText(/no ice cream will actually be delivered/i);
// 	expect(popover).toBeInTheDocument();
// 	userEvent.unhover(termsAndConditions);
// 	const nullPopoverAgain = screen.queryByText(/no ice cream will actually be delivered/i);
// 	expect(nullPopoverAgain).not.toBeInTheDocument();
// })
