import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const CourseForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const data = JSON.parse(queryParams.get("data"));
  console.log(data);

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 20,
        gap: 20,
        alignItems: "center",
      }}
    >
      <label for="title">Title</label>
      <input id="title" value={data.title}></input>
      <label for="meeting_titmes">Meeting Times</label>
      <input id="meeting_times" value={data.meeting_times}></input>

      <button className="btn btn-success">Submit</button>
      <Link
        to={{
          pathname: "/",
        }}
      >
        {" "}
        <button className="btn btn-danger">Cancel</button>
      </Link>
    </form>
  );
};
