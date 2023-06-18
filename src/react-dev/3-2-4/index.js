import { useState } from "react";
import { letters } from "./data.js";
import Letter from "./Letter.js";
import './3-2-4.css';

export default function MutipleSelectionMailClient() {
  const [selectedIds, setSelectedIds] = useState([]);

  const selectedCount = selectedIds.length;

  function handleToggle(toggledId) {
    // Was it previously selected?
    if (selectedIds.includes(toggledId)) {
      // Then remove this ID from the array.
      setSelectedIds(selectedIds.filter((id) => id !== toggledId));
    } else {
      // Otherwise, add this ID to the array.
      setSelectedIds([...selectedIds, toggledId]);
    }
  }

  return (
    <div className="quiz-bg" id="css3-2-4">
      <h1 className="quiz-title">3-2-4: Mutiple Selection Mail Client</h1>
      <div>
        <h2>Inbox</h2>
        <ul>
          {letters.map((letter) => (
            <Letter
              key={letter.id}
              letter={letter}
              isSelected={selectedIds.includes(letter.id)}
              onToggle={handleToggle}
            />
          ))}
          <hr />
          <p>
            <b>You selected {selectedCount} letters</b>
          </p>
        </ul>
      </div>
    </div>
  );
}
