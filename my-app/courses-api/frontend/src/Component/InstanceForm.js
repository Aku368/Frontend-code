import React, { useState } from 'react';
import axios from 'axios';

function InstanceForm() {
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [courseId, setCourseId] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!year || !semester || !courseId) {
      setError('All fields are required');
      return;
    }
    
    // Clear previous messages
    setError('');
    setSuccess('');
    
    axios.post('/api/instances', { year, semester, courseId })
      .then(response => {
        setSuccess('Instance created successfully');
        // Optional: Reset form fields after successful submission
        setYear('');
        setSemester('');
        setCourseId('');
      })
      .catch(error => {
        setError('Error creating instance');
        console.error('Error creating instance:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Course Instance</h1>

      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      
      <div className="form-group">
        <label htmlFor="year">Year:</label>
        <input 
          type="number" 
          id="year" 
          value={year} 
          onChange={(e) => setYear(e.target.value)} 
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="semester">Semester:</label>
        <input 
          type="number" 
          id="semester" 
          value={semester} 
          onChange={(e) => setSemester(e.target.value)} 
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="courseId">Course ID:</label>
        <input 
          type="number" 
          id="courseId" 
          value={courseId} 
          onChange={(e) => setCourseId(e.target.value)} 
          required
        />
      </div>

      <button type="submit">Create Instance</button>
    </form>
  );
}

export default InstanceForm;
