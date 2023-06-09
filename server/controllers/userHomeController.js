import ErrorResponse from "../utils/errorResponse.js";
import asyncHandler from "../middleware/asyncHandler.js";
import Game from "../models/Game.js";
import User from "../models/User.js";

// @desc    Get all games per user
// @route   GET /api/v1/user
// @access  Private/User
export const getGamesPerUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  const gamesOfUser = await Promise.all(
    user.games.map(async (game) => {
      const singleGame = await Game.findById(game);
      return singleGame;
    })
  );
  res.status(200).json(gamesOfUser);
});

// @desc    join a game
// @route   PUT /api/v1/user
// @access  Private/User
export const joinGame = asyncHandler(async (req, res, next) => {
  const game = await Game.findById(req.body.gameId);
  if (!game.users.includes(req.user.id)) {
    await Game.findByIdAndUpdate(req.body.gameId, {
      $push: { users: req.user.id },
    });
    await User.findByIdAndUpdate(req.user.id, {
      $push: { games: req.body.gameId },
    });
  }

  res.status(201).json({
    success: true,

    url: `/user/game/${req.body.gameId}`,
  });
});
