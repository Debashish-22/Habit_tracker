const express = require('express');
const router = express.Router();

const historyController = require('../controllers/history_controller');

router.get('/', historyController.historyHome);
// updating a habit performance on history page
router.post('/update', historyController.historyHabitUpdate);

module.exports = router