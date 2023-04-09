import mongoose from "mongoose";

const GameSchema = new mongoose.Schema(
  {
    theme: {
      type: String,
      enum: ["Christmas", "Purim", "Eid Al Fitr"],
      default: "Christmas",
    },
    isStarted: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        unique: [true, "each user joins once"],
        index: { unique: true },
      },
    ],
    assignments: [
      {
        giver: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        receiver: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        finished: {
          type: Boolean,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,

      transform: function (_, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
    toObject: {
      virtuals: true,

      transform: function (_, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

export default mongoose.model("Game", GameSchema);
