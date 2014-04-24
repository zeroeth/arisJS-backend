var CharacterInstance = require('../models/character_instance');

var CharacterInstancesController = function(app)
{
	app.get('/character_instances', function(req, res)
	{
		CharacterInstance.find({scene_id: req.query.scene_id}, function (error, character_instances)
		{
			res.send(character_instances);
		});
	});

	app.post('/character_instances', function(req, res)
	{
		var character_instance = new CharacterInstance();

		character_instance.description    = req.body.description;
		character_instance.scene_id       = req.body.scene_id;
		character_instance.character_id   = req.body.character_id;
		character_instance.character_name = req.body.character_name;

		character_instance.save(function (error, character_instance)
		{
			if (error) {
				console.error("error", error.red);
			}
			else {
				res.send(character_instance);
			}
		});		
	});

	app.put('/character_instances/:id', function(req, res)
	{
	});
}

module.exports = CharacterInstancesController;
