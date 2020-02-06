const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes, both API and view
app.use(routes);

// Mongoose connection
const URI = process.env.MONGODB_URI;
mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
})
const connection = mongoose.connection;

connection.on('error', (err) => {
    console.log('This is a mongoose error' + err)
})

connection.once('open', () => {
    console.log('DB is connected');
})


// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
