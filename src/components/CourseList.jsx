import React from "react";
import { CourseCard } from "./CourseCard";
import './CourseList.css'

export default function CourseList({ courseList }) {

  // filter with 3 buttons
  return (
    <div className="course-list">
      {courseList.map((x, index) => (
        // <p>{x.term} CS {x.number}: {x.title}</p>
        <CourseCard course={x} key={index}/>
      ))}
    </div>
  );
}
