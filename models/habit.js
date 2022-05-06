const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    totalReps:{
        type: Number,
        required: true
    },
    currentReps:{
        type: Number,
        default: 0
    },
    startedOn:{
        type: String,
        required: true
    },
    records: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Record"
        }
    ]
},{
    timestamps: true
})

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit
