const mongoose = require('mongoose');

// Attendance schema for individual attendance records
const attendanceSchema = new mongoose.Schema({
  date: String,
  clock_in: String,
  clock_out: String,
  hours_worked: Number,
  status: String
});

// Employee schema
const employeeSchema = new mongoose.Schema({
  employee_id: String,
  first_name: String,
  last_name: String,
  attendances: [attendanceSchema] // Array of attendance records
});

// Export Employee model
module.exports = mongoose.model('Employee', employeeSchema, 'employee_attendance');
