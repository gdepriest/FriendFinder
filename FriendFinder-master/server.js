var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "./app/public/survey.html"));
// });

// app.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "./app/public/home.html"));
// });


require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, () => {
    console.log(`API Server now listening on PORT ${PORT}!`);
})