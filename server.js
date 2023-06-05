const express = require('express');
const app = express();
const axios = require('axios');

// Import StudentCdo class
const StudentCdo = require('./studentCdo');

// Insert a new student
app.post('/test', (req, res) => {
  const newStudent = new StudentCdo(1, 'John Doe');
  axios.post('http://localhost:8090/test', newStudent.toJpo())
    .then(response => {
      res.send('Student inserted successfully');
    })
    .catch(error => {
      console.error('Error inserting student:', error);
      res.status(500).send('Error inserting student');
    });
});

// Find a student by ID
app.get('/test', (req, res) => {
  const id = req.query.id;
  axios.get('http://localhost:8090/test', {
    params: {
      id: id
    }
  })
    .then(response => {
      const studentJpo = response.data;
      const student = new StudentCdo(studentJpo.id, studentJpo.name);
      res.send('Found student: ' + JSON.stringify(student));
    })
    .catch(error => {
      console.error('Error finding student:', error);
      res.status(500).send('Error finding student');
    });
});

// Modify a student
app.put('/test', (req, res) => {
  const id = req.query.id;
  const updatedStudent = new StudentCdo(1, 'Updated Student');
  axios.put(`http://localhost:8090/test?id=${id}`, updatedStudent.toJpo())
    .then(response => {
      res.send('Student modified successfully');
    })
    .catch(error => {
      console.error('Error modifying student:', error);
      res.status(500).send('Error modifying student');
    });
});

// Delete a student
app.delete('/test', (req, res) => {
  const id = req.query.id;
  axios.delete('http://localhost:8090/test', {
    params: {
      id: id
    }
  })
    .then(response => {
      res.send('Student deleted successfully');
    })
    .catch(error => {
      console.error('Error deleting student:', error);
      res.status(500).send('Error deleting student');
    });
});

//서버 진입점
app.listen(9000, function() {
  console.log('Server listening on port 9000');
});