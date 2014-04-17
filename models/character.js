var mongoose = require('mongoose');

var CharacterSchema = mongoose.Schema(
{
	name:  String,
	game_id: Number,
	created_at: { type: Date, default: Date.now },
});

var Character = mongoose.model('Character', CharacterSchema);

module.exports = Character;
