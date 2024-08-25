const express = require('express');
const router = express.Router();

// In-memory store for demo purposes
let instances = [];
let nextInstanceId = 1;

// POST /api/instances - Create a new instance
router.post('/', (req, res) => {
  const { year, semester, courseId } = req.body;
  const instance = { year, semester, courseId };
  instances.push(instance);
  res.status(201).json(instance);
});

// GET /api/instances/:year/:semester - List courses delivered in a year and semester
router.get('/:year/:semester', (req, res) => {
  const { year, semester } = req.params;
  const filteredInstances = instances.filter(i => i.year === parseInt(year) && i.semester === parseInt(semester));
  res.json(filteredInstances);
});

// GET /api/instances/:year/:semester/:courseId - View detailed information about an instance
router.get('/:year/:semester/:courseId', (req, res) => {
  const { year, semester, courseId } = req.params;
  const instance = instances.find(i => i.year === parseInt(year) && i.semester === parseInt(semester) && i.courseId === parseInt(courseId));
  if (!instance) return res.status(404).send('Instance not found');
  res.json(instance);
});

// DELETE /api/instances/:year/:semester/:courseId - Delete an instance
router.delete('/:year/:semester/:courseId', (req, res) => {
  const { year, semester, courseId } = req.params;
  const instanceIndex = instances.findIndex(i => i.year === parseInt(year) && i.semester === parseInt(semester) && i.courseId === parseInt(courseId));
  if (instanceIndex === -1) return res.status(404).send('Instance not found');
  instances.splice(instanceIndex, 1);
  res.status(204).send();
});

module.exports = router;
