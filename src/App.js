import React, { useState } from 'react';
import CustomSelect from './components/CustomSelect/indec';

const App = () => {

  const [selectedOption, setSelectedOption] = useState('Select an option');
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <CustomSelect
        options={options}
        selected={selectedOption}
        onSelect={handleSelect}
      />
    </div>
  );
};

export default App;
