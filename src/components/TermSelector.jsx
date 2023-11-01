import React from "react";

export const TermSelector = ({ term, selection, setSelection }) => {
  const terms = {
    Fall: "Fall",
    Winter: "Winter",
    Spring: "Spring",
  };

  return (
    <div>
      <input
        data-cy={term}
        type="radio"
        id={term}
        className="btn-check"
        checked={term === selection}
        autoComplete="off"
        onChange={() => setSelection(term)}
      />
      <label className="btn btn-success mb-1 p-2" htmlFor={term}>
        {term}
      </label>
    </div>
  );
};
