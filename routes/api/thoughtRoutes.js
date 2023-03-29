const router = require("express").Router();
const { getSingleThought, getThoughts, createThought, updateThought, deleteThought, addReaction, removeReaction } = require("../../controllers/thoughtController");

// api/thoughts
router.route("/").get(getThoughts).post(createThought);

// api/thoughts/:thoughtId
router.route("/:thoughtId").get(getSingleThought).put(updateThought).delete(deleteThought);

// add and remove reactions
router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
