// src/components/CourseForm.js
import React, { useState } from 'react';
import axios from 'axios';
import CourseList from './CourseList'; // Import the CourseList component

function CourseForm() {
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [courses, setCourses] = useState([]); // State to hold the list of courses

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/courses', { title, code, description })
      .then(response => {
        alert('Course created successfully!');
        setIsSuccess(true);
        // Fetch the updated list of courses after successful creation
        fetchCourses();
      })
      .catch(error => console.error('Error creating course:', error));
  };

  const fetchCourses = () => {
    axios.get('http://localhost:3000/api/courses')
      .then(response => setCourses(response.data))
      .catch(error => console.error('Error fetching courses:', error));
  };

  // Fetch courses when component mounts
  React.useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Create a Course</h2>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Code:
          <input type="text" value={code} onChange={(e) => setCode(e.target.value)} />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <button type="submit">Create Course</button>
      </form>

      {/* Render the course list */}
      {isSuccess && <CourseList courses={courses} />}
    </div>
  );
}

export default CourseForm;
