// src/components/CourseList.js
import React from 'react';

function CourseList({ courses }) {
  return (
    <div>
      <h2>Course List</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <h3>{course.title}</h3>
            <p>Code: {course.code}</p>
            <p>Description: {course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
