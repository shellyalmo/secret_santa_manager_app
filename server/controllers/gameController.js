import ErrorResponse from "../utils/errorResponse.js";
import asyncHandler from "../middleware/asyncHandler.js";
// import Game from "../models/Game.js";

// @desc    CREATE new game
// @route   POST /api/v1/admin/gamesettings
// @access  Private/Admin
export const createGame = asyncHandler(async (req, res, next) => {
  // const game = await Game.create(req.body);

  res.status(201).json({
    success: true,
    // data: game,
    url: "/admin/game/85641614",
  });
});
