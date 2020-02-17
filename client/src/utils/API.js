import axios from "axios";

// Instagram URL API
const BASEURL = "https://api.instagram.com/oembed?url=http://instagr.am/p//";
const APIKEY = "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=20";

export default {

    search: function(query) {
        return axios.get(BASEURL + query + APIKEY);
    },

    // Get all Saved Events
    getAllEvents: function() {
        return axios.get("/api/events");
    },
    // Get all saved Matches
    getAllMatches:function () {
        return axios.get("/api/match")
    },
    
    // Add new Events
    addEvent: function(addEvent) {
        return axios.post("/api/events", addEvent)
        
    },
    // Add new Matches
    addMatch: function(addMatch) {
        return axios.post("/api/match", addMatch)
    },



    
    // Get Events by Id
    getEvent: function(id) {
        return axios.get("/api/events" + id);
    },
    // Get Matches by id
    getMatch: function(id) {
        return axios.get("/api/match" + id);
    },



    // Save an Event  to the database
    saveEvent: function(saveEvent) {
        return axios.post("/api/events", saveEvent);
    },
    // Save a Match to the database
    saveMatch: function(saveMatch) {
        return axios.post("/api/match", saveMatch);
    },



    // Delete an Event with the given id
    deleteEvent: function(id) {
        return axios.delete("/api/events/" + id);
    },
    // Delete a Match with given id
    deleteMatch: function(id) {
        return axios.delete("/api/match/" + id);
    },


    
    //Update an event 
    updateEvent: function(id) {
        return axios.put("/api/events/" + id);
    },
    //Update a Match
    updateMatch: function(id) {
        return axios.put("/api/match/" + id);
    }

    
}