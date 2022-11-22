import React, {useState} from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName: string) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [isChecked, setIsChecked] = useState(false);

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  return (
    <div>
      <button style={{backgroundColor: isChecked ? 'gray' : buttonColor}} onClick={() => {setButtonColor(newButtonColor)}} disabled={isChecked}>Change to {newButtonColor}</button>
      <input
        type='checkbox'
        id="disable-button-checkbox"
        defaultChecked={isChecked}
        aria-checked={isChecked}
        onChange={(e) =>
          setIsChecked(e.target.checked)}/>
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
