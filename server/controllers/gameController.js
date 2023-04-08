import ErrorResponse from "../utils/errorResponse.js";
import asyncHandler from "../middleware/asyncHandler.js";
import Game from "../models/Game.js";
import User from "../models/User.js";

// @desc    CREATE new game
// @route   POST /api/v1/admin/gamesettings
// @access  Private/Admin
export const createGame = asyncHandler(async (req, res, next) => {
  const game = await Game.create({
    theme: req.body.theme,
    admin: req.user.id,
    users: [req.user.id],
  });
  await User.findByIdAndUpdate(req.user.id, {
    $push: { games: game.id },
  });

  res.status(201).json({
    success: true,
    data: game,
    url: `/admin/game/${game.id}`,
  });
});
