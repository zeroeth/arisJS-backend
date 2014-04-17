var mongoose = require('mongoose');

var SceneSchema = mongoose.Schema(
{
	title:  String,
	game_id: Number,
	editor_x:  Number,
	editor_y:  Number,
	created_at: { type: Date, default: Date.now },
});

var Scene = mongoose.model('Scene', SceneSchema);

module.exports = Scene;
