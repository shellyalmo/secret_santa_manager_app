import ErrorResponse from "../utils/errorResponse.js";
import asyncHandler from "../middleware/asyncHandler.js";
import Game from "../models/Game.js";

// @desc    Get all games per user
// @route   GET /api/v1/user
// @access  Private/User
export const getGamesPerUser = asyncHandler(async (req, res, next) => {
  res.status(200).json([
    { name: "bigso santa", theme: "christmas", admin: false, id: 1 },
    { name: "eid now", theme: "eid", admin: true, id: 2 },
    { name: "purim schmurim", theme: "purim", admin: false, id: 3 },
  ]);
});

// @desc    join a game
// @route   PUT /api/v1/user
// @access  Private/User
export const joinGame = asyncHandler(async (req, res, next) => {
  await Game.findByIdAndUpdate(
    req.body.gameId,
    { $push: { users: req.user.id } }
    // push isn't working for a different user than the admin
  );

  res.status(201).json({
    success: true,

    url: `/user/game/${req.body.gameId}`,
  });
});
