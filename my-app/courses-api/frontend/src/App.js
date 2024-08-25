import React from 'react';
import CourseForm from './Component/CourseForm';
import InstanceForm from './Component/InstanceForm';

import './App.css'; // Assuming your styles are in App.css

function App() {
  return (
    <div className="app-container">
      <div className="form-container">
        <CourseForm />
      </div>
      <div className="form-container">
        <InstanceForm />
      </div>
    
    </div>
  );
}

export default App;
