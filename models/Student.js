const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StudentSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    rollNo: {
      type: String,
      required: true
    },
    course: {
      type: String,
      required: true
    },
    branch: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    },
    contact: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    areaOfInterest: {
      type: String
    },
    nameOfSociety: {
      type: String
    },
    typeOfSociety: {
      type: String
    },
    iCard: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const Student = mongoose.model('Student', StudentSchema);

module.exports = { Student };
