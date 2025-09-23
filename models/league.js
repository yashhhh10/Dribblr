const mongoose = require('mongoose');
const leagueSchema = new mongoose.Schema({
    leagueName: {String, required: true},
    country: {String, required: true},
    seasons:{type:Date, required:true}
});
module.exports = mongoose.model('League', leagueSchema);