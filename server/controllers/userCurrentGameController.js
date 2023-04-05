import ErrorResponse from "../utils/errorResponse.js";
import asyncHandler from "../middleware/asyncHandler.js";

// @desc    Get current game per user
// @route   GET /api/v1//user/game/:id
// @access  Private/User
export const getCurrentGamePerUser = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    receiver: "Bob Shmob",
    gifts: [
      { name: "Fluffy Pyjamas", id: 1 },
      { name: "Homemade Cookies", id: 2 },
      { name: "DIY soap kit", id: 3 },
    ],
  });
});
