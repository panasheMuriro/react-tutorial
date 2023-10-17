import React, { useState } from "react";
import { useEffect } from "react";
import { hasClash } from "../utils/hasClash";
import { isCourseSelected } from "../utils/isCourseSelected";
import { labelClashingCourses } from "../utils/labelClashingCourses";
import { CourseCard } from "./CourseCard";
import "./CourseList.css";

export default function CourseList({ courseList, getSelectedClasses }) {
  // filter with 3
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [selected, setSelected] = useState({});
  const [courseWithMarkings, setCourseWithMarkings] = useState([]);

  useEffect(() => {
    setCourseWithMarkings(courseList);
  }, [courseList]);



  const toggleSelected = (selectedCourse) => {
    if (isCourseSelected(selectedCourse, selectedClasses)) {
      // If it's already selected, remove it
      setSelectedClasses(
        selectedClasses.filter((course) =>
          !(selectedCourse.number === course.number &&
      selectedCourse.meets === course.meets &&
      selectedCourse.term === course.term &&
      selectedCourse.title === course.title)
        )
      );
    } else if (
      selectedClasses.some((course) => hasClash(course, selectedCourse))
    ) {
      alert(
        "Course time clashes with a selected course. Please choose another time slot."
      );
    } else {
      setSelectedClasses([...selectedClasses, selectedCourse]);
    }
  };

  

  useEffect(() => {
    getSelectedClasses(selectedClasses);
    let x = labelClashingCourses(courseList, selectedClasses);
    setCourseWithMarkings(x)
  
  }, [selectedClasses]);

  


  return (
    <div className="course-list">
      {courseWithMarkings.map((x, index) => (
        <CourseCard
          course={x}
          key={index}
          onClick={() => toggleSelected(x)}
          selected={isCourseSelected(x, selectedClasses)}
          clashes={x.clashes}
        />
      ))}
    </div>
  );
}
