import axios from "axios";

export default {

    // Get all Saved Events
    getAllEvents: function() {
        return axios.get("http://localhost:3001/api/events");
    },
    // Get all saved Matches
    getAllMatches:function () {
        return axios.get("http://localhost:3001/api/match")
    },
    
    // Add new Events
    addEvent: function(addEvent) {
        return axios.post("http://localhost:3001/api/events", addEvent)
        
    },
    // Add new Matches
    addMatch: function(addMatch) {
        return axios.post("http://localhost:3001/api/match", addMatch)
    },



    
    // Get Events by Id
    getEvent: function(id) {
        return axios.get("http://localhost:3001/api/events" + id);
    },
    // Get Matches by id
    getMatch: function(id) {
        return axios.get("http://localhost:3001/api/match" + id);
    },



    // Save an Event  to the database
    saveEvent: function(saveEvent) {
        return axios.post("http://localhost:3001/api/events", saveEvent);
    },
    // Save a Match to the database
    saveMatch: function(saveMatch) {
        return axios.post("http://localhost:3001/api/match", saveMatch);
    },



    // Delete an Event with the given id
    deleteEvent: function(id) {
        return axios.delete("http://localhost:3001/api/events/" + id);
    },
    // Delete a Match with given id
    deleteMatch: function(id) {
        return axios.delete("http://localhost:3001/api/match/" + id);
    },


    
    //Update an event 
    updateEvent: function(id) {
        return axios.put("http://localhost:3001/api/events/" + id);
    },
    //Update a Match
    updateMatch: function(id) {
        return axios.put("http://localhost:3001/api/match/" + id);
    }
}