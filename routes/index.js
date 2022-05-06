const express = require('express');
const router = express.Router();

const homeRoutes = require('./home_routes');
const habitRoutes = require('./habit_routes');
const historyRoutes = require('./history_routes');

router.use('/', homeRoutes);
router.use('/habit', habitRoutes);
router.use('/history', historyRoutes);

module.exports = router