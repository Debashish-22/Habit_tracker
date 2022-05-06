const express = require('express');
const router = express.Router();

const habitController = require('../controllers/habit_controller');

// display form page
router.get('/habit-form', habitController.habitFormPage);
// on submitting form
router.post('/create-habit', habitController.createHabit);
// updating any habit
router.get('/update/', habitController.updateHabit);
// deleteing a habit
router.get('/delete/:id', habitController.deleteHabit);

module.exports = router