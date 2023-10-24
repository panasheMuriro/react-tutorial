import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "../utils/firebase";

export const CourseCard = ({ course, onClick, selected, clashes }) => {
  const [user] = useAuthState();
  
  useEffect(() => {
    console.log(selected);
  }, [selected]);



  return (
    <>
      <div
        className="card m-1 p-2"
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
          {clashes && (
            <p className="card-text" style={{ color: "red" }}>
              cannot add
            </p>
          )}
          <div style={{display: "flex", justifyContent: "center", gap:5}}>
            <button onClick={onClick} className="btn btn-success">
              {selected?"Remove": "Add"}
            </button>

            <Link to={`/course_form?data=${JSON.stringify({id: course.term[0]+course.number, title:course.title, meeting_times: course.meets})}`}>
           
           {user &&  <button className="btn btn-secondary">Edit</button>}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
