/* Debug */
console.log("ENV", process.env);

var express    = require("express");
var cors       = require("cors");
var logfmt     = require("logfmt");
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');


/* Models */
var Scene = require('./models/scene');


/* Routes */

var ScenesController = require('./controllers/scenes');



/* App Init */
var app = express();

app.use(cors());
app.use(bodyParser());
app.use(logfmt.requestLogger());

mongoose.connect(process.env.MONGOLAB_URI);



/* Routes */

var scenes_controller = new ScenesController(app);



/* Start server */
var port = Number(process.env.PORT);

app.listen(port, function()
{
  console.log("Listening on " + port);
});
