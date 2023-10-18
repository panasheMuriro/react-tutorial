import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Banner from "./components/Banner";
import CourseList from "./components/CourseList";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import TermPage from "./components/TermPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CourseForm } from "./components/CourseForm";

const App = () => {
  const [scheduleTitle, setScheduleTitle] = useState("");
  const [courseData, setCourseData] = useState([]);

  const getCompleteData = async () => {
    let res = await fetch(
      "https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php"
    );
    let data = await res.json();
    return data;
  };

  useEffect(() => {
    getCompleteData().then((data) => {
      setCourseData(Object.values(data.courses));
      setScheduleTitle(data.title);
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Banner title={scheduleTitle} />

        <Routes>
          <Route path="/" element={<TermPage courseList={courseData} />} />
          <Route path="/course_form" element={<CourseForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
