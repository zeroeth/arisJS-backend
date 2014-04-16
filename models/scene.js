var mongoose = require('mongoose');

var SceneSchema = mongoose.Schema(
{
	title:  String,
	editor_x:  Number,
	editor_y:  Number,
	created_at: { type: Date, default: Date.now },
});

var Scene = mongoose.model('EegEvent', SceneSchema);

module.exports = Scene;
