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
import { useDbData, useDbUpdate } from "./utils/firebase";

const App = () => {
  const [scheduleTitle, setScheduleTitle] = useState("");
  const [courseData, setCourseData] = useState([]);


  const [title, error1] = useDbData('/title')
  const [courses, error2] = useDbData('/courses')

  useEffect(() => {
      if(title){
        setScheduleTitle(title);
      }

      if (courses){
        setCourseData(Object.values(courses));
      }
     
    // });
  }, [title, courses]);


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
