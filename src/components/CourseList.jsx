import React, { useState } from "react";
import { useEffect } from "react";
import { CourseCard } from "./CourseCard";
import "./CourseList.css";

export default function CourseList({ courseList, getSelectedClasses }) {
  // filter with 3
  const [selectedClasses, setSelectedClasses] = useState([]);

  const toggleSelected = (item) => {
    // Check if the item is already in selectedClasses
    if (selectedClasses.includes(item)) {
      // If it's already selected, remove it
      setSelectedClasses(selectedClasses.filter((course) => course !== item));
    } else {
      // If it's not selected, add it
      setSelectedClasses([...selectedClasses, item]);
    }
  };

  useEffect(() => {
    getSelectedClasses(selectedClasses);
  }, [selectedClasses]);

  return (
    <div className="course-list">
      {courseList.map((x, index) => (
        <CourseCard
          course={x}
          key={index}
          onClick={() => toggleSelected(x)}
          selected={selectedClasses.includes(x)}
        />
      ))}
    </div>
  );
}
