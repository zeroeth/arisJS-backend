var mongoose = require('mongoose');

var CharacterInstanceSchema = mongoose.Schema(
{
	triggered_by_id: String,
	character_id: String,
	character_name: String,
	//_character: { type: String, ref: 'Character' },
	scene_id: String,
	description: String,
	editor_x:  Number,
	editor_y:  Number,
	created_at: { type: Date, default: Date.now },
});

var CharacterInstance = mongoose.model('CharacterInstance', CharacterInstanceSchema);

module.exports = CharacterInstance;
