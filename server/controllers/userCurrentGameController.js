import ErrorResponse from "../utils/errorResponse.js";
import asyncHandler from "../middleware/asyncHandler.js";
import Game from "../models/Game.js";
import User from "../models/User.js";

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
      gifts: [
        { name: "Fluffy Pyjamas", id: 1 },
        { name: "Homemade Cookies", id: 2 },
        { name: "DIY soap kit", id: 3 },
      ],
    });
  } else {
    res.status(200).json({
      receiver: "unassigned",
      gifts: [],
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
  res.status(200).json({
    data: "bob would enjoy a jar of pickles",
    success: true,
  });
});
