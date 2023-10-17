import React from "react";
import { useEffect } from "react";

export const CourseCard = ({ course, onClick, selected, clashes }) => {
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
        {clashes &&  <p className="card-text" style={{color: "red"}}>cannot add</p>}
        </div>
      </div>
    </>
  );
};
