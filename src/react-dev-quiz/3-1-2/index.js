import { useState } from "react";
import './3-1-2.css';

export default function EditProfile() {
  const [isEdit, setIsEdit] = useState(true);
  const [name, setName] = useState({
    firstName: "Ray",
    lastName: "Huang"
  });

  const { firstName } = name;
  const { lastName } = name;

  return (
    <div class="quiz-bg">
      <h1 class="quiz-title">3-1-2: Profile Editor</h1>
      <form id="css3-1-2">
        <label>
          First name:{" "}
          {isEdit ? (
            <input
              value={firstName}
              onChange={(e) => {
                setName({
                  ...name,
                  firstName: e.target.value
                });
              }}
            />
          ) : (
            <b>{firstName}</b>
          )}
        </label>
        <label>
          Last name:{" "}
          {isEdit ? (
            <input
              value={lastName}
              onChange={(e) => {
                setName({
                  ...name,
                  lastName: e.target.value
                });
              }}
            />
          ) : (
            <b>{lastName}</b>
          )}
        </label>
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsEdit((x) => !x);
          }}
        >
          {`${isEdit ? "Save" : "Edit"} Profile`}
        </button>
        <p>
          <i>{`${firstName} ${lastName}`}</i>
        </p>
      </form>
    </div>
  );
}
