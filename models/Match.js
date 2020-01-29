const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const infoMatchSchema = new Schema({
  
  month: { type: String },
  location: {type: String },
  date: { type: String },
  time: { type: String },
  logoTeamHome: { type: String, trim: true },
  logoTeamAway: { type: String, trim: true },
  googleMapsLink: {type: String, trim:true }
  
});

infoMatchSchema.virtual('date_format')
  .set(function(fecha) {
    this.date = new Date(fecha);
  })
  .get(function(){
    return this.date.toISOString.substring(0,10);
  });
  
const Match = mongoose.model("Match", infoMatchSchema);
  
module.exports = Match;
