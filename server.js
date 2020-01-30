const express = require("express");
  const mongoose = require("mongoose");
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

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB

mongoose.connect( 
  process.env.MONGODB_URI || "mongodb://user:P%40ssword123@ds315359.mlab.com:15359/heroku_zbxbq055",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);


// const URI = process.env.MONGODB_URI 
// ? process.env.MONGODB_URI 
// : 'mongodb://localhost/databasetest';

// mongoose.connect(URI, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// })
// const connection = mongoose.connection;

// connection.on('error', (err) => {
//     console.log('This is a mongoose error' + err)
// })

// connection.once('open', () => {
//     console.log('DB is connected');
// })


// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://user1:password1@ds125871.mlab.com:25871/heroku_0xn0jnk7",
//   {
//     useCreateIndex: true,
//     useNewUrlParser: true
//   }
// );

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
