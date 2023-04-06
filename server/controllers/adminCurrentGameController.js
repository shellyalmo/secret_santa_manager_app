import ErrorResponse from "../utils/errorResponse.js";
import asyncHandler from "../middleware/asyncHandler.js";

import _ from "lodash-es";
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
  participants = _.shuffle(participants);

  participants.forEach((participant, i) => {
    if (i === participants.length - 1) {
      participant.receiver = participants[0].fullName;
    } else {
      participant.receiver = participants[i + 1].fullName;
    }
  });
  participants.sort((a, b) => a.fullName.localeCompare(b.fullName));
  res.status(200).json({
    success: true,
  });
});
