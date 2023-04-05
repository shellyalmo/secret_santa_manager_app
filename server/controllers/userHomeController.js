import ErrorResponse from "../utils/errorResponse.js";
import asyncHandler from "../middleware/asyncHandler.js";

// @desc    Get all games per user
// @route   GET /api/v1//user
// @access  Private/User
export const getGamesPerUser = asyncHandler(async (req, res, next) => {
  res.status(200).json([
    { name: "bigso santa", theme: "christmas", admin: false, id: 1 },
    { name: "eid now", theme: "eid", admin: true, id: 2 },
    { name: "purim schmurim", theme: "purim", admin: false, id: 3 },
  ]);
});
