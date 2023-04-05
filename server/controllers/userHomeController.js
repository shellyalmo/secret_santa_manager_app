import ErrorResponse from "../utils/errorResponse.js";
import asyncHandler from "../middleware/asyncHandler.js";

// @desc    Get all games per user
// @route   GET /api/v1//user
// @access  Private/User
export const getGamesPerUser = asyncHandler(async (req, res, next) => {
  res.status(200).json([
    { name: "bigso santa", theme: "christmas", admin: false },
    { name: "eid now", theme: "eid", admin: true },
    { name: "purim schmurim", theme: "purim", admin: false },
  ]);
});
