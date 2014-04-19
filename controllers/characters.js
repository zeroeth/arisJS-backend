var Character = require('../models/character');

var CharactersController = function(app)
{
	app.get('/characters', function(req, res)
	{
		Character.find({game_id: req.query.game_id}, function (error, characters)
		{
			res.send(characters);
		});
	});


	app.post('/characters', function(req, res)
	{
		var character = new Character();

		character.name    = req.body.name
		character.game_id = req.body.game_id

		character.save(function (error, character)
		{
			if (error) {
				console.error(error.red);
			}
			else {
				res.send(character);
			}
		});		
	});


	app.put('/characters/:id', function(req, res)
	{
		Character.findById(req.params.id, function (find_error, character)
		{
			character.name    = req.body.name

			character.save(function (save_error)
			{
				if (save_error) {
					console.log(save_error);
				}
				else {
					res.send(character);
				}
			});
		});
	});
}

module.exports = CharactersController;
