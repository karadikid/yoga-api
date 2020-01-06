const express = require('express');
const app = express();
const yogaRoutes = require("./routes/Yoga");
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config()
const cors = require('cors')

let PORT = process.env.PORT;
app.use(cors())

// parse requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use(express.json())

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// .listen() - application will wait for requests from a specific port
app.set("port", PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

// When user requests at the root / of our application...
// .use references a particular router
app.use("/", yogaRoutes)

// app.use("/users", userRoutes)