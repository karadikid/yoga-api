const express = require('express');
const app = express();
const yogaRoutes = require("./routes/Yoga");

app.use(express.json())

// .listen() - application will wait for requests from a specific port
app.listen(8080, () => console.log('Port 8080, Ommmm.') )

// When user requests at the root / of our application...
// .use references a particular router
app.use("/", yogaRoutes)

// app.use("/users", userRoutes)