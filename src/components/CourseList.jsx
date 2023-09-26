import React from "react";
import { CourseCard } from "./CourseCard";
import './CourseList.css'

export default function CourseList({ courseList }) {
  return (
    <div className="course-list">
      {courseList.map((x) => (
        // <p>{x.term} CS {x.number}: {x.title}</p>
        <CourseCard course={x} />
      ))}
    </div>
  );
}
