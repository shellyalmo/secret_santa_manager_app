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

// @desc    post gift ideas from ChatGPT
// @route   POST /api/v1//user/game/:id
// @access  Private/User
export const getGiftIdeasFromChatGPT = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    data: "bob would enjoy a jar of pickles",
    success: true,
  });
});
