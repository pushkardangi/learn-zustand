import React from "react";
import './App.css';
import CourseForm from "./components/CourseForm";

const App = () => {
  return (
    <div className="main-container">
      <h1>Zusttut Courses</h1>
      <CourseForm />
    </div>
  );
};

export default App;
