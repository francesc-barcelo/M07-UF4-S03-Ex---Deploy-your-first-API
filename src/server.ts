import './loadEnvironment.js';
import express from 'express';

// Initialize express
const app = express();
const port = process.env.HOST_PORT ?? '3000';
import students  from './utils/Students';

// Ens permet envia els protocols
app.use(express.json());

// Redirigim la / --> /students
app.get('/', (req, res) => {
  res.redirect('students');
});

app.get('/students', (req, res) => {
   res.json({
     length: students.length,
     students: students,
   });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app;
