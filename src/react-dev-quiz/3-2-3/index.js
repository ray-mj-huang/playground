import { useState } from "react";
import { initialLetters } from "./data.js";
import Letter from "./Letter.js";
import './3-2-3.css';

export default function StarMailClient() {
  const [letters, setLetters] = useState(initialLetters);
  const [highlightedId, setHighlightedId] = useState(null);

  function handleHover(letterId) {
    setHighlightedId(letterId);
  }

  function handleStar(starredId) {
    setLetters(
      letters.map((letter) => {
        if (letter.id === starredId) {
          return {
            ...letter,
            isStarred: !letter.isStarred
          };
        } else {
          return letter;
        }
      })
    );
  }

  return (
    <div className="quiz-bg" id="css3-2-3">
      <h1 className="quiz-title">3-2-3: Star Mail Client</h1>
      <div>
        <h2>Inbox</h2>
        <ul>
          {letters.map((letter) => (
            <Letter
              key={letter.id}
              letter={letter}
              isHighlighted={letter.id === highlightedId}
              onHover={handleHover}
              onToggleStar={handleStar}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
