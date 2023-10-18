import { Link, useNavigate } from "react-router-dom";

export default function Banner({ title }) {


  return (
    <div>
      <h1>{title}</h1>

      <Link
        to={{
          pathname: "/course_form",
        }}
      >
        {" "}
        <button>Course Form</button>
      </Link>
    </div>
  );
}
