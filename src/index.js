const express = require('express');
const app = express();
const yogaRoutes = require("./routes/Yoga");
const bodyParser = require('body-parser');

// parse requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// .listen() - application will wait for requests from a specific port
app.listen(8080, () => console.log('Port 8080, Ommmm.') )

// When user requests at the root / of our application...
// .use references a particular router
app.use("/", yogaRoutes)

// app.use("/users", userRoutes)