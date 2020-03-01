const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeamMember = new Schema ({
    name: {type: String, required: true}, 
    position: {type: String, required: true}, 
    numberPosition: {type: Number, required: true},
    picture: {type:String, trim:true} 
});

const Team = mongoose.model("Team", TeamMember);

module.exports = Team;