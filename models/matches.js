const mongoose = require('mongoose');
const matchSchema = new mongoose.Schema({
    homeTeam: {type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true},
    awayTeam: {type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true},
    league: {type: mongoose.Schema.Types.ObjectId, ref: 'League', required: true},
    matchDate: {type: Date, required: true},
    matchTime: {type: String, required: true},
    venue: {type: String, required: true},
    score: {
        home: {type: Number, default: 0},
        away: {type: Number, default: 0}
    },
    status: {type: String, enum: ['scheduled', 'ongoing', 'completed'], default: 'scheduled'}
});
module.exports = mongoose.model('Match', matchSchema);