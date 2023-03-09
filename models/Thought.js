const { Schema, model } = require("mongoose");
const reactionSchema = require("../models/Reaction");

const dateFormat = require("../utils/dateFormat");

const thoughtSchema = new Schema(
  {
    thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, get: (timestamp) => dateFormat(timestamp) },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Thought = model("Thought", thoughtSchema);
module.exports = Thought;
