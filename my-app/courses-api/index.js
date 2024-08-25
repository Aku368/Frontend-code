const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const coursesRouter = require('./routes/courses');
const instancesRouter = require('./routes/instances');

app.use('/api/courses', coursesRouter);
app.use('/api/instances', instancesRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
