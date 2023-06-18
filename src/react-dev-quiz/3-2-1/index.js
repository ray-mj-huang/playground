import { useState, useEffect } from 'react';
import Clock from './Clock.js';

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function ColorfulClock() {
  const time = useTime();
  const [color, setColor] = useState('lightcoral');
  return (
    <div className="quiz-bg">
      <h1 className="quiz-title">3-2-1: Colorful Clock</h1>
      <div>
        <p>
          Pick a color:{' '}
          <select value={color} onChange={e => setColor(e.target.value)}>
            <option value="lightcoral">lightcoral</option>
            <option value="midnightblue">midnightblue</option>
            <option value="rebeccapurple">rebeccapurple</option>
          </select>
        </p>
        <Clock color={color} time={time.toLocaleTimeString()} />
      </div>
    </div>
  );
}
