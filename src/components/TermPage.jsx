import { useEffect, useState } from "react";
import { CourseCard } from "./CourseCard";
import CourseList from "./CourseList";
import Modal from "./Modal";

const terms = {
  Fall: "Fall",
  Winter: "Winter",
  Spring: "Spring",
};

const TermButton = ({ term, selection, setSelection }) => {
  return (
    <div data-cy={term}>
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
  <div className="btn-group" >
    {Object.keys(terms).map((term) => (
      <TermButton
      
        key={term}
        term={term}
        selection={selection}
        setSelection={setSelection}
      />
    ))}
  </div>
);

export default function TermPage({ courseList, selectedCourseList }) {
  const [selection, setSelection] = useState(() => Object.keys(terms)[0]);
  const [filteredCourseList, setFilteredCourseList] = useState(courseList);

  useEffect(() => {
    console.log(selection);
    setFilteredCourseList(
      courseList.filter((course) => course.term == selection)
    );
  }, [selection, courseList]);

  const [openModal, setOpenModal] = useState(false);
  const [selectedClasses, setSelectedClasses] = useState([]);

  return (
    <div>
      <TermSelector selection={selection} setSelection={setSelection} />
   
      <button className="btn btn-success mb-1 p-2" style={{marginLeft: 100}} onClick={()=> setOpenModal(true)}>My courses</button>
      <Modal open={openModal} close={()=>setOpenModal(false)}>
      {selectedClasses.map((x, index) => (
        <CourseCard
          course={x}
          key={index}
          onClick={() => {}}
          selected={selectedClasses.includes(x)}
        />
      ))}
        
      </Modal>
      <CourseList courseList={filteredCourseList} getSelectedClasses={(classes)=>setSelectedClasses(classes)} />
    </div>
  );
}
