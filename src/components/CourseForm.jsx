import React, { useState } from "react";
import useCourseStore from "../store/courseStore";

const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);

  const [courseTitle, setCourseTitle] = useState("");
  console.log("CourseForm Rendered");

  const handleCourseSubmit = () => {
    if (!courseTitle) return alert("Please add a course title");

    addCourse({
      id: Math.ceil(Math.random() * 1000000),
      title: courseTitle,
      completed: false,
    });

    setCourseTitle("");
  };

  return (
    <div className="form-container">
      <input className="form-input" value={courseTitle} onChange={(e) => setCourseTitle(e.target.value)} />
      <button className="form-submit-btn" onClick={handleCourseSubmit} >Add Course</button>
    </div>
  );
};

export default CourseForm;
