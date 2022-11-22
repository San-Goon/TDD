import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

test('button turns blue when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});
  expect(colorButton).toBeEnabled();
  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();

})

test('checkbox test', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});
  expect(colorButton).toBeEnabled();
  const checkBox = screen.getByRole('checkbox', {name: 'Disable button'});
  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();
  fireEvent.click(checkBox);
  expect(colorButton).toBeEnabled();
})

test('button disabled when checkbox enable', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});
  fireEvent.click(colorButton);
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'});
})
