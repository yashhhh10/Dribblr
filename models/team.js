const mongoose= require('mongoose');
const teamSchema= new mongoose.Schema({
    name:{type:String,required:true},
    league:{type:mongoose.Schema.Types.ObjectId,ref:'League',required:true},
    shortname:{type:String,required:true},
    stadium:{type:String,required:true},
    coach:{type:String,required:true},
    founded:{type:Number,required:true}
});
module.exports= mongoose.model('Team',teamSchema);