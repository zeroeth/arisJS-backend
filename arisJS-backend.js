/* Debug */
console.log("ENV", process.env);

var express    = require("express");
var cors       = require("cors");
var logfmt     = require("logfmt");
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');


/* Routes */

var             ScenesController = require('./controllers/scenes');
var         CharactersController = require('./controllers/characters');
var CharacterInstancesController = require('./controllers/character_instances');


/* App Init */
var app = express();

app.use(cors());
app.use(bodyParser());
app.use(logfmt.requestLogger());

mongoose.connect(process.env.MONGOLAB_URI);


/* Routes */

var              scenes_controller = new ScenesController(app);
var          characters_controller = new CharactersController(app);
var character_instances_controller = new CharacterInstancesController(app);


/* Start server */
var port = Number(process.env.PORT);

app.listen(port, function()
{
  console.log("Listening on " + port);
});
