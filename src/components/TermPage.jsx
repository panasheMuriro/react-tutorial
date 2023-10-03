import { useEffect, useState } from "react";
import CourseList from "./CourseList";

const terms = {
  Fall: "Fall",
  Winter: "Winder",
  Spring: "Spring",
};

const TermButton = ({ term, selection, setSelection }) => {
  return (
    <div>
      <input
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

const TermSelector = ({ selection, setSelection }) => (
  <div className="btn-group">
    {Object.keys(terms).map((term,) => (
      <TermButton
        key={term}
        term={term}
        selection={selection}
        setSelection={setSelection}
      />
    ))}
  </div>
);

export default function TermPage({ courseList }) {
  const [selection, setSelection] = useState(() => Object.keys(terms)[0]);
  const [filteredCourseList, setFilteredCourseList] = useState(courseList);

  useEffect(() => {
    console.log(selection);
    setFilteredCourseList(
      courseList.filter((course) => course.term == selection)
    );
  }, [selection, courseList]);

  return (
    <div>
      <TermSelector selection={selection} setSelection={setSelection} />
      <CourseList courseList={filteredCourseList} />
    </div>
  );
}
