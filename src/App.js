import React, { useState } from 'react';
import './index.css';

// Main App Component
const App = () => {
  const [theme, setTheme] = useState('dark'); // 'dark' or 'light'
  const [output, setOutput] = useState('0');
  const [currentInput, setCurrentInput] = useState('');

  const handlePress = (value) => {
    if (value === 'AC') {
      setOutput('0');
      setCurrentInput('');
      return;
    }
    if (value === '=') {
      try {
        setOutput(eval(currentInput).toString());
      } catch (e) {
        setOutput('Error');
      }
      return;
    }
    setCurrentInput(currentInput + value);
    setOutput(currentInput + value);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const themeClass = theme === 'dark' ? 'dark-theme' : 'light-theme';

  return (
    <div className={`app-container ${themeClass}`}>
      {/* Theme Toggle */}
      <div className="toggle-container">
        <button className="toggle-btn" onClick={toggleTheme}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>

      {/* Output Display */}
      <div className="output-container">
        <p className="output-text">{output}</p>
      </div>

      {/* Calculator Buttons */}
      <div className="button-container">
  {['AC', '+-', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', 'C', '0', '.', '='].map(
    (item) => {
      let buttonStyle = {};

      // Apply different styles based on the button
      if (item === 'AC') {
        buttonStyle = { backgroundColor: '#ff4d4d', color: 'white' }; // Red
      } else if (item === '=') {
        buttonStyle = { backgroundColor: '#4caf50', color: 'white' }; // Green
      } else if (['+', '-', '*', '/'].includes(item)) {
        buttonStyle = { color: 'Red' }; // Orange
      }

      return (
        <button
          key={item}
          className="calc-button"
          style={buttonStyle}
          onClick={() => handlePress(item)}
        >
          {item}
        </button>
      );
    }
  )}
</div>
    </div>
  );
};

export default App;
