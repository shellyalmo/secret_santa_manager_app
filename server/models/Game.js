import mongoose from "mongoose";

const GameSchema = new mongoose.Schema(
  {
    theme: {
      type: String,
      enum: ["christmas", "purim", "eid"],
      default: "christmas",
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },

    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
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
