const express = require('express');

const app = express();

app.use(express.json());

// Sample Data
let students = [
    { id: 1, name: 'Sunny', age: 20 },
    { id: 2, name: 'Rahul', age: 21 }
];

// READ - Get Students
app.get('/students', (req, res) => {
    res.json(students);
});

// CREATE - Add Student
app.post('/students', (req, res) => {

    students.push(req.body);

    res.send('Student Added Successfully');

});

// UPDATE - Update Student
app.put('/students/:id', (req, res) => {

    let student = students.find(s => s.id == req.params.id);

    if (student) {
        student.name = req.body.name;
        student.age = req.body.age;

        res.send('Student Updated');
    }
    else {
        res.send('Student Not Found');
    }

});

// DELETE - Delete Student
app.delete('/students/:id', (req, res) => {

    students = students.filter(s => s.id != req.params.id);

    res.send('Student Deleted');

});

// Start Server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});