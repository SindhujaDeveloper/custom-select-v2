import React, { useState } from 'react';

const CustomSelect = ({options, selected, onSelect}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-select">
      <div className="select-header" onClick={handleToggle}>
        {selected}
        <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </div>
      {isOpen && options.length >= 1 && (
        <div className="select-options">
          {options.map((option, index) => (
            <div
              key={index}
              className="select-option"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
