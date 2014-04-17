var mongoose = require('mongoose');

var CharacterInstanceSchema = mongoose.Schema(
{
	triggered_by_id: Number,
	editor_x:  Number,
	editor_y:  Number,
	created_at: { type: Date, default: Date.now },
});

var CharacterInstance = mongoose.model('CharacterInstance', CharacterInstanceSchema);

module.exports = CharacterInstance;
