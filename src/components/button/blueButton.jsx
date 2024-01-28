import React from 'react';
import './blueButton.css';

const BlueButton = ({ text, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

export default BlueButton;
