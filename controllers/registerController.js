const { Student } = require('../models/Student');
const fs = require('fs');

exports.getindex = (req, res) => {
  res.render('index', { title: 'Home' });
};

exports.getRegsiterForm = (req, res) => {
  res.render('register', { title: 'Register' });
};

exports.postData = (req, res) => {
  const {
    name,
    rollNo,
    course,
    branch,
    year,
    contact,
    email,
    areaOfInterest,
    nameOfSociety,
    typeOfSociety
  } = req.body;

  const iCard = req.file.path;

  const student = new Student({
    name,
    rollNo,
    course,
    branch,
    year,
    contact,
    email,
    areaOfInterest,
    nameOfSociety,
    typeOfSociety,
    iCard
  });

  console.log(student);

  student
    .save()
    .then(data => {
      res.render('success', {
        student: student,
        msg: 'You are successfully registered'
      });
    })
    .catch(e => console.log(e));

  console.log(student);
};
