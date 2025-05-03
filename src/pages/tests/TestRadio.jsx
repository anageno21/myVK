import React, { useState } from 'react';
import '../../styles/TestStyles.css';

function TestRadio() {
  const [selected, setSelected] = useState(null);

  const handleChange = (value) => {
    console.log('Selected value:', value); // Debugging
    setSelected(value);
  };

  return (
    <div className="free-package-section">
      <div className="section-content">
        <h3 className="section-title">Test Radio Buttons</h3>
        <div className="test-container">
          <div className="options">
            <label className="option-label">
              <input
                type="checkbox"
                value="1"
                checked={selected === '1'}
                onChange={() => handleChange('1')}
              />
              Option 1
            </label>
            <label className="option-label">
              <input
                type="checkbox"
                value="2"
                checked={selected === '2'}
                onChange={() => handleChange('2')}
              />
              Option 2
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestRadio; // Εξασφαλίζουμε ότι εξάγουμε το component σωστά