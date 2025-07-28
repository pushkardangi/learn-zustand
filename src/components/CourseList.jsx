import React from "react";
import useCourseStore from "../store/courseStore";

const CourseList = () => {
  const courses = useCourseStore((state) => state.courses);
  const removeCourse = useCourseStore((state) => state.removeCourse);
  const toggleCourseStatus = useCourseStore((state) => state.toggleCourseStatus);

  return (
    <>
      <ul>
        {courses.map((course) => {
          return (
            <React.Fragment key={course.id}>
              <li className="course-item" style={{ backgroundColor: course.completed ? "#5b9c6aff" : "#aaaaaaff" }}>
                <span className="course-item-col-1">
                  <input
                    type="checkbox"
                    checked={course.completed}
                    onChange={(e) => {
                      toggleCourseStatus(course.id);
                    }}
                  />
                </span>
                <span className="course-title">{course.title}</span>
                <button
                  onClick={() => {
                    removeCourse(course.id);
                  }}
                  className="delete-btn"
                ></button>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default CourseList;
