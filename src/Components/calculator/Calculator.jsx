import React, { useState } from 'react';
import "./calculator.css";
import * as math from 'mathjs';
import darkModeIcon from './dark-mode-icon.png';
import lightModeIcon from './light-mode-icon.png';


export default function Calculator() {
  const [result, setResult] = useState('');
  const [selectedOperator, setSelectedOperator] = useState('');
  const [darkMode, setDarkMode] = useState(true);

  const handleClick = (e) => {
    const buttonName = e.target.name;

    if (isNaN(buttonName)) {
      if (selectedOperator && selectedOperator !== buttonName) {
        setSelectedOperator(buttonName);
        setResult(result.slice(0, -1).concat(buttonName));
      } else if (!selectedOperator) {
        setSelectedOperator(buttonName);
        setResult(result.concat(buttonName));
      }
    } else {
      if (selectedOperator) {
        if (result.slice(-1) === selectedOperator) {
          setResult(result.concat(buttonName));
        } else {
          setResult(result + selectedOperator + buttonName);
        }
        setSelectedOperator('');
      } else {
        setResult(result.concat(buttonName));
      }
    }
  };

  const clear = () => {
    setResult('');
    setSelectedOperator('');
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
    setSelectedOperator('');
  };

  const calculate = () => {
    try {
      setResult(math.evaluate(result).toString());
      setSelectedOperator('');
    } catch (err) {
      setResult('Error');
    }
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container ${darkMode ? 'dark' : 'light'}`}>
      <div className="theme-switch-container">
        <button onClick={toggleTheme} className="theme-switch" title="Toggle Theme">
          <img
            src={darkMode ? darkModeIcon : lightModeIcon}
            alt={darkMode ? "Dark Mode" : "Light Mode"}
            className="theme-switch-icon"
          />
        </button>
      </div>
      <form>
        <input type="text" value={result} />
      </form>
      <div className="keypad">
        <button className="highlight" onClick={clear} id="clear">Clear</button>
        <button className="highlight" onClick={backspace} id="backspace">⌫</button>
        <button className="highlight" name="/" onClick={handleClick}>&divide;</button>
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button className="highlight" name="*" onClick={handleClick}>&times;</button>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button className="highlight" name="-" onClick={handleClick}>&ndash;</button>
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button className="highlight" name="+" onClick={handleClick}>+</button>
        <button name="0" onClick={handleClick}>0</button>
        <button className="highlight" name="." onClick={handleClick}>.</button>
        <button className="highlight" name="=" onClick={calculate} id="result">=</button>
      </div>
    </div>
  );
}
