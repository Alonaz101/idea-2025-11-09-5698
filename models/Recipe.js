const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  moodTags: [{ type: String }],
  ingredients: [{ type: String }],
  instructions: { type: String },
  nutritionInfo: { type: Object },
});

module.exports = mongoose.model('Recipe', RecipeSchema);
