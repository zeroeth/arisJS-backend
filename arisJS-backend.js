var express    = require("express");
var cors       = require("cors");
var logfmt     = require("logfmt");
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');

/* Debug */
console.log("ENV", process.env);



/* App Init */
var app = express();

app.use(cors());
app.use(bodyParser());
app.use(logfmt.requestLogger());

mongoose.connect(process.env.MONGOLAB_URI);



/* Models */

var SceneSchema = mongoose.Schema(
{
	title:  String,
	editor_x:  Number,
	editor_y:  Number,
	created_at: { type: Date, default: Date.now },
});

var Scene = mongoose.model('EegEvent', SceneSchema);

// SceneObject



/* Routes */

/* GET index */
app.get('/scenes', function(req, res)
{
	// TODO Scope to game id
	Scene.find({}, function (error, scenes)
	{
		res.send(scenes);
	});
});

/* POST create */
app.post('/scenes', function(req, res)
{
	var scene = new Scene();

	scene.title = req.body.title

	scene.save(function (error, scene)
	{
		if (error) {
			console.error(error.red);
		}
		else {
			res.send(scene);
		}
	});
});

/* PUT update */
app.put('/scenes/:id', function(req, res)
{
	Scene.findById(req.body._id, function (find_error, scene)
	{
		scene.title = req.body.title;
		scene.save(function (save_error)
		{
			if (save_error) {
				console.log(save_error);
			}
			else {
				res.send(scene);
			}
		});
	});
});

/* GET show */
app.get('/scenes/:id', function(req, res)
{
});

/* DELETE destroy */
app.delete('/scenes/:id', function(req, res)
{
});


/* Start server */
var port = Number(process.env.PORT);

app.listen(port, function()
{
  console.log("Listening on " + port);
});
