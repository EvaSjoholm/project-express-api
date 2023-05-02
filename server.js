import express from "express";
import cors from "cors";

// If you're using one of our datasets, uncomment the appropriate import below
// to get started!
// import avocadoSalesData from "./data/avocado-sales.json";
// import booksData from "./data/books.json";
// import goldenGlobesData from "./data/golden-globes.json";
// import netflixData from "./data/netflix-titles.json";
// import topMusicData from "./data/top-music.json";

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
// Access locally our server and recieve req cross origin (cors)
app.use(cors());
app.use(express.json());

// Start defining your routes here to grt access. 
//First argument is the route and then a callback function (req, rep).
// Req is Front End sends and response what we send back in res.send.
app.get("/", (req, res) => {
  res.send("Hello Technigo!");
});

//Get all famil members from technigo members
app.get("/", (req, res) => {
  res.send("Second Hello!");
});

// Start the server/application. It needs to listen to a port.
// That is defined in line 15. 
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
