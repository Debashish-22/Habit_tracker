const Habit = require('../models/habit');
const Record = require('../models/record');
const moment = require('moment');

const habitFormPage = (req, res) => {

    res.render("habit_form", {
        title: "New Habit | Habit Tracker"
    })
}

const createHabit = async (req, res) => {
    try {

        let habit = await Habit.findOne({name: req.body.habitName});
        
        if(habit){
            return res.redirect('back');
        }

        await Habit.create({
            name: req.body.habitName,
            totalReps: Number(req.body.totalReps),
            startedOn: moment().format('L')
        })
        return res.redirect('back');
    } 
    catch (err) {
        return res.redirect('back');
    }
}

const updateHabit = async (req, res) => {
    try {

        let currReps;
        let today = moment().format('L');
        let habit = await Habit.findById(req.query.id);
        let record = await Record.findOne({
            date: today,
            habitId: habit.id
        });

        // If no record found then create a default record according to user inputs

        if (!record) {

            if (req.query.status === 'increment') {
                currReps = 1;
            }
            if (req.query.status === 'decrement') {
                currReps = 0;
            }
            if (req.query.status === 'complete') {
                currReps = habit.totalReps;
            }

            let newRecord = await Record.create({

                habitId: req.query.id,
                date: today,
                currentReps: currReps,
                totalReps: habit.totalReps,
                status: req.query.status === "complete" ? 'done' : 'notDone'
            })

            habit.records.push(newRecord.id);
            habit.save();
            return res.redirect('back');
        }
        // If record found then update that particular record

        if (req.query.status === 'increment') {
            
            if(record.currentReps !== record.totalReps){
                record.currentReps++;
                if(record.currentReps === record.totalReps){
                    record.status = 'done';
                }
                else{
                    record.status = 'notDone';
                }
            }   
        }

        if (req.query.status === 'decrement') {

            if(record.currentReps <= 0){
                record.currentReps = 0;
                record.status = "notDone";
            }
            else{
                record.currentReps--;
                record.status = "notDone";
            }
        }

        if (req.query.status === 'complete') {
            record.currentReps = habit.totalReps;
            record.status = "done";
        }

        record.save();
        return res.redirect('back');

    } catch (err) {
        return res.redirect('back');
    }
}

const deleteHabit = async(req, res) =>{
    try{

        await Habit.findByIdAndDelete(req.params.id);
        await Record.deleteMany({ habitId: req.params.id });

        return res.redirect('back');
    }
    catch(err){
        return res.redirect('back');
    }
}

module.exports = {
    habitFormPage,
    createHabit,
    updateHabit,
    deleteHabit
}