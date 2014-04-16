var Scene = require('../models/scene');

var ScenesController = function(app)
{
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
}

module.exports = ScenesController;
