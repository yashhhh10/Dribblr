const mongoose = require('mongoose');

const leagueSchema = new mongoose.Schema({
    leagueName: { type: String, required: true },
    country: { type: String, required: true },
    seasons: { type: String, required: true }
});

module.exports = mongoose.model('League', leagueSchema);