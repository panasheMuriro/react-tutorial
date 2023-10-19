import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const CourseForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const data = JSON.parse(queryParams.get("data"));

  const [title, setTitle] = useState(data.title);
  const [meetingTimes, setMeetingTimes] = useState(data.meeting_times);
  const [raiseTitleError, setRaiseTitleError] = useState(false);
  const [raiseMeetingError, setRaiseMeetingError] = useState(false);

  const validate = (e) => {
    e.preventDefault();
    console.log(title, meetingTimes);

    if (title.length < 2) {
      setRaiseTitleError(true);
    } else {
      setRaiseTitleError(false);
    }

    if (meetingTimes == "") {
      setRaiseMeetingError(false);
    } else if (
      meetingTimes.split(" ").length !== 2 ||
      !(
        meetingTimes.split(" ")[0] !== "MWF" ||
        meetingTimes.split(" ")[0] !== "TTh"
      ) ||
      !meetingTimes.split(" ")[1].match(/^(\d{1,2}:\d{2})-(\d{1,2}:\d{2})$/)
    ) {
      console.log(meetingTimes.split(" ").length !== 2);
      alert("not valid");
      setRaiseMeetingError(true);
    } else {
      setRaiseMeetingError(false);
    }
  };
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
      <label htmlFor="title">Title</label>
      <input
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      {raiseTitleError && (
        <div style={{ color: "red", fontSize: 12 }}>
          course title must be at least two characters
        </div>
      )}
      <label htmlFor="meeting_times">Meeting Times</label>
      <input
        id="meeting_times"
        onChange={(e) => setMeetingTimes(e.target.value)}
        value={meetingTimes}
      ></input>
      {raiseMeetingError && (
        <div style={{ color: "red", fontSize: 12 }}>
          must contain days and start-end, e.g., MWF 12:00-13:20
        </div>
      )}
      <button type="button" className="btn btn-success" onClick={validate}>
        Submit
      </button>
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
