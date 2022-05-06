const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
    habitId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Habit"
    },
    date:{
        type: String
    },
    currentReps:{
        type: Number
    },
    totalReps:{
        type: Number
    },
    status:{
        type: String,
        enum: ["none", "done", "notDone"]
    }
})

const Record = mongoose.model('Record', recordSchema);

module.exports = Record