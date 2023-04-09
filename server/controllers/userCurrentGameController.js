import ErrorResponse from "../utils/errorResponse.js";
import asyncHandler from "../middleware/asyncHandler.js";
import Game from "../models/Game.js";
import User from "../models/User.js";
import { callChatGPT } from "../models/ChatGPT.js";

// @desc    Get current game per user
// @route   GET /api/v1/user/game/:id
// @access  Private/User
export const getCurrentGamePerUser = asyncHandler(async (req, res, next) => {
  const game = await Game.findById(req.params.id);
  const gameAssignments = game.assignments;
  const userAssignment = gameAssignments.find((a) =>
    a.giver.equals(req.user.id)
  );

  if (userAssignment?.receiver) {
    const user = await User.findById(userAssignment?.receiver);
    res.status(200).json({
      receiver: user.name,
    });
  } else {
    res.status(200).json({
      receiver: "unassigned",
    });
  }
});

// @desc    update finished game per user
// @route   PUT /api/v1/user/game/:id
// @access  Private/User
export const finishGame = asyncHandler(async (req, res, next) => {
  const game = await Game.findById(req.params.id);
  const gameAssignments = game.assignments;
  const userAssignment = gameAssignments.find((a) =>
    a.giver.equals(req.user.id)
  );
  userAssignment.finished = true;
  await game.save(); // save the changes to the database
  res.status(200).json({
    success: true,
  });
});

// @desc    post gift ideas from ChatGPT
// @route   POST /api/v1//user/game/:id
// @access  Private/User
export const getGiftIdeasFromChatGPT = asyncHandler(async (req, res, next) => {
  const receiverDescription = req.body;
  res.status(200).json({
    data: await callChatGPT(receiverDescription),
    success: true,
  });
});
