const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// GET /api/recipes?mood=
router.get('/', async (req, res) => {
  try {
    const mood = req.query.mood;
    if (!mood) return res.status(400).json({ error: 'Mood query parameter is required' });

    const recipes = await Recipe.find({ moodTags: mood });
    res.json(recipes);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
