const moment = require('moment');
const Habit = require('../models/habit');
const Record = require('../models/record');

const historyHome = async(req, res) => {

    try{
        
        // We are finding all the records of thathabit
        let habits = await Habit.find({}).populate('records');

        // we are creating a 7 day interfcae including today and 6 days before today date.
        let rangeList = [];
        let start = moment().subtract(6,'d');
        let end = moment();

        for (var current = start; current <= end; current.add(1, 'd')) {

            rangeList.push({
                currentDay: current.format('dddd'),
                currentDate: current.format('L'), 
            })
        }

        return res.render('history_page', {
            title: "History | Habit Tracker",
            habits: habits,
            rangeList: rangeList,
            today: moment().format('L'),
            moment: moment
        })
    }
    catch(err){
        return res.redirect('back');
    }
}

const historyHabitUpdate = async(req, res) =>{
    try{

        let record = await Record.findOne({
            habitId: req.query.id,
            date: req.query.date
        })


        // if record found on selected date then update if not then create a record containg a status only.
        if(!record){

            let habit = await Habit.findById(req.query.id)
          
            let newRecord = await Record.create({
                habitId: habit.id,
                date: req.query.date,
                status: req.query.status
            })
            habit.records.push(newRecord)
            habit.save()
            
            return res.redirect('back')
        }
      
        record.status = req.query.status;
        record.save();

        return res.redirect('back');
    }
    catch(err){
        return res.redirect('back');
    }
}

module.exports = {
    historyHome,
    historyHabitUpdate
}