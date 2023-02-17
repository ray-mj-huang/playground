import { useState } from 'react';

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  return [
    { value: value, onChange: e => setValue(e.target.value)}, // 重複複製貼上的東西
    () => setValue(initialValue) // 還原為預設值的 function
  ];
};


// value={title}
// onChange={e => setValue(e.target.value)}