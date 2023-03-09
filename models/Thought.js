const { Schema, model } = require("mongoose");
const reactionSchema = require("../models/Reaction");

// import dateFormat from "../utils/dateFormat";

const thoughtSchema = new Schema(
  {
    thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
    username: { type: String, required: true },
    // createdAt: { type: Date, default: Date.now, get: (timestamp) => dateFormat(timestamp) },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = thoughtSchema;
