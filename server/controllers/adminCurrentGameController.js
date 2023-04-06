import ErrorResponse from "../utils/errorResponse.js";
import asyncHandler from "../middleware/asyncHandler.js";

let participants = [
  {
    fullName: "Alfreds Futterkiste",
    email: "alfred@gmail.com",
    receiver: "",
    finished: true,
    id: 1,
  },
  {
    fullName: "Maria Anders",
    email: "maria@gmail.com",
    receiver: "",
    finished: false,
    id: 2,
  },
  {
    fullName: "Michelle Anderson",
    email: "michelle@gmail.com",
    receiver: "",
    finished: false,
    id: 3,
  },
  {
    fullName: "Josh Yoahueburg",
    email: "josh@gmail.com",
    receiver: "",
    finished: true,
    id: 4,
  },
];

// @desc    Get users per game
// @route   GET /api/v1/admin/game/:id
// @access  Private/Admin
export const getCurrentUsersPerGame = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    data: participants,
  });
});

// @desc    Update users per game
// @route   PUT /api/v1/admin/game/:id
// @access  Private/Admin
export const assignPairs = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
  });
});
