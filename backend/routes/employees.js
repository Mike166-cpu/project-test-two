const express = require('express');
const router = express.Router();
const Employee = require('../models/employee'); // Import the Employee model

// Route to get all employees
router.get('/employees', async (
