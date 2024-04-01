import { useState } from 'react';

export default function Hinter() {
  const [showHint, setShowHint] = useState(false);
  if (showHint) {
    return (
      <QuizContainer>
        <p><i>Hint: Your favorite city?</i></p>
        <Form />
        <button onClick={() => {
          setShowHint(false);
        }}>Hide hint</button>
      </QuizContainer>
    );
  }
  return (
    <QuizContainer>
      {null}
      <Form />
      <button onClick={() => {
        setShowHint(true);
      }}>Show hint</button>
    </QuizContainer>
  );
}

function Form() {
  const [text, setText] = useState('');
  return (
    <textarea style={{ display: 'block', marginBottom: 20 }}
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );
}

function QuizContainer({ children }) {
  return (
    <div className="quiz-bg" style={{ flexDirection: 'column' }}>
      <h1 className="quiz-title">3-4-1: Hinter</h1>
      {children}
    </div>
  )
}
