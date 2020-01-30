const path = require("path");
const router = require("express").Router();
const eventsRoutes = require("./events");
const matchRoutes = require("./match");

// Events routes
router.use("/events", eventsRoutes);

// Matches Routes
router.use("/match", matchRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
