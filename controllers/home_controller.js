const Habit = require('../models/habit');
const moment = require('moment');

const home = async(req, res) =>{

    try{

        let habits = await Habit.find({}).populate('records');
        let today = moment().format('L');

        return res.render('home', {
            title: "Home | Habit Tracker",
            habits: habits,
            day: moment().format('dddd'),
            today: today
        })
    }
    catch(err){
        return res.redirect('back');
    }
}

module.exports = { home }