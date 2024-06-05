const router = require('express').Router();
const {
  getThoughts,
  getSingleThoughts,
  createThoughts,
  updateThoughts,
  deleteThoughts,
  addThoughtReaction,
  removeThoughtReaction,
} = require('../../controllers/thoughtController');

// /api/thoughtss
//http://localhost:3001/api/Thoughts
router.route('/').get(getThoughts).post(createThoughts);

// /api/videos/:videoId
router
  .route('/:thoughtId')
  .get(getSingleThoughts)
  .put(updateThoughts)
  .delete(deleteThoughts);

// /api/thought/:thoughtId/reactions
//http://localhost:3001/api/thoughts/
router.route('/:thoughtId/reactions').post(addThoughtReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeThoughtReaction);

module.exports = router;
