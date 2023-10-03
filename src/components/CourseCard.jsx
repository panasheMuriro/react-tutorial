import React from "react";
import { useEffect } from "react";

export const CourseCard = ({ course, onClick, selected }) => {
  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <>
      <div
        className="card m-1 p-2"
        onClick={onClick}
        style={{ backgroundColor: selected ? "orange" : "white" }}
      >
        <div className="card-body">
          <h5 className="card-title">
            {course.term} CS {course.number}
          </h5>
          <p className="card-text">{course.title}</p>
          <div className="card-footer bg-white">
            <p className="card-text">{course.meets}</p>
          </div>
        </div>
      </div>
    </>
  );
};
