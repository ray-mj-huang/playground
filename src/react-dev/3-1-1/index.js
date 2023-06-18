import { useState } from "react";
import '../react-quiz.css';
import './3-1-1.css';

export default function Picture() {
  const [isImgActive, setIsImgActive] = useState(false);
  
  let wrapperStyle = "background";
  let imgStyle = "picture";

  if (isImgActive) {
    imgStyle += " picture--active";
  } else {
    wrapperStyle += " background--active";
  }

  return (
    <div id="css3-1-1">
      <h1 class="quiz-title">3-1-1: Add and remove a CSS class</h1>
      <div
        className={wrapperStyle}
        onClick={(e) => {
          e.stopPropagation();
          setIsImgActive(false);
        }}
      >
        <img
          onClick={(e) => {
            e.stopPropagation();
            setIsImgActive(true);
          }}
          className={imgStyle}
          alt="Rainbow houses in Kampung Pelangi, Indonesia"
          src="https://i.imgur.com/5qwVYb1.jpeg"
        />
      </div>
    </div>
  );
}
