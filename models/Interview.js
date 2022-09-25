const mongoose = require("mongoose");

const experienceSchema = mongoose.Schema({
  company: {
    type: String,
  },
  role: {
    type: String,
  },
  companyLogo: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
  },
  date: {
    type: Date,
  },
  onCampus: {
    type: Boolean,
  },
  location: {
    type: String,
  },
  ctc: {
    type: Number,
  },
  upVote: {
    type: Number,
  },
  selected: {
    type: Boolean,
  },
  description: {
    platformUsed: String,
    subjectLearned: String,
    courses: String,
    aptitudePrep: String,
  },
  process: {
    roundOne: {
      description: String,
      questionAsked: String,
      difficultyLevel: String,
      duration: String,
    },
  },
});

const Experience = new mongoose.model("Experience", experienceSchema);

module.exports = Experience;
