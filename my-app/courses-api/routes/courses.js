const express = require('express');
const router = express.Router();

// In-memory store for demo purposes
let courses = [];
let nextCourseId = 1;

// POST /api/courses - Create a new course
router.post('/', (req, res) => {
  const { title, code, description } = req.body;
  const course = { id: nextCourseId++, title, code, description };
  courses.push(course);
  res.status(201).json(course);
});

// GET /api/courses - List all courses
router.get('/', (req, res) => {
  res.json(courses);
});

// GET /api/courses/:id - View detailed information about a course
router.get('/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('Course not found');
  res.json(course);
});

// DELETE /api/courses/:id - Delete a course
router.delete('/:id', (req, res) => {
  const courseIndex = courses.findIndex(c => c.id === parseInt(req.params.id));
  if (courseIndex === -1) return res.status(404).send('Course not found');
  courses.splice(courseIndex, 1);
  res.status(204).send();
});

module.exports = router;
