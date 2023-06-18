import { useState } from 'react';
import './3-3-1.css';

export default function SyncedInputs() {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className="quiz-bg" id="css3-3-1">
      <h1 className="quiz-title">3-3-1: Synced Inputs</h1>
      <div>
        <Input
          label="First input"
          value={text}
          onChange={handleChange}
        />
        <Input
          label="Second input"
          value={text}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

function Input({ label, value, onChange }) {
  return (
    <label>
      {label}
      {' '}
      <input
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
