const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addThoughtResponse,
  removeThoughtResponse,
} = require('../../controllers/videoController');

// /api/thoughtss
//http://localhost:3001/api/Thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/videos/:videoId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thought/:thoughtId/reactions
//http://localhost:3001/api/Thoughts/
router.route('/:thoughtId/reactions').post(addThoughtResponse);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeThoughtResponse);

module.exports = router;
