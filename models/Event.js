const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const infoEventSchema = new Schema({
  
  title: { type: String, required: true },
  image: { type: String, trim: true },
  description: {
    type: String, 
    required: true,
    // validate: {
    //   validator: function(text) {
    //     return text.indexOf('Provide an address, time and place of the event') === 0;
    // },
    //   message: "Provide an address, time and place of the event"
    // }
  },
  date: {
    type:Date,

  },
  contactInfoEmail:{type: String, trim:true },
  googlemapslinkplace: {type: String, trim:true }
  
});

infoEventSchema.virtual('date_format')
  .set(function(fecha) {
    this.date = new Date(fecha);
  })
  .get(function(){
    return this.date.toISOString.substring(0,10);
  });
  
const Event = mongoose.model("Event", infoEventSchema);
  
module.exports = Event;