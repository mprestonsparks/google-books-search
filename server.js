require('dotenv').config();
const express = require("express");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const mongoURL = process.env.PROD_MONGODB || "mongodb://localhost:27017/googlebooks"


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// // Add routes, both API and view
// app.use(routes);

mongoose.connect(mongoURL, {useNewUrlParser: true})
  .then(() => {
    console.log("🗄 ==> Successfully connected to mongoDB.");
  })
  .catch((err) => {
    console.log(`Error connecting to mongoDB: ${err}`);
  });

require("./routes/api/api-routes")(app);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
