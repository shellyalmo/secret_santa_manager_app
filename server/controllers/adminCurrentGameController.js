import ErrorResponse from "../utils/errorResponse.js";
import asyncHandler from "../middleware/asyncHandler.js";
import Game from "../models/Game.js";
import User from "../models/User.js";
import _ from "lodash-es";

let participants = [
  {
    fullName: "",
    email: "",
    receiver: "",
    finished: false,
    id: "",
  },
];

// @desc    Get users per game
// @route   GET /api/v1/admin/game/:id
// @access  Private/Admin
export const getCurrentUsersPerGame = asyncHandler(async (req, res, next) => {
  const game = await Game.findById(req.params.id);

  const currentUsersForGame = await Promise.all(
    game.users.map(async (id) => {
      const user = await User.findById(id);
      return {
        fullName: user.name,
        email: user.email,
        receiver: user.receiver,
        finished: false,
        id: user.id,
      };
    })
  );
  res.status(200).json({
    success: true,
    data: currentUsersForGame,
  });

  // res.status(200).json({
  //   success: true,
  //   data: participants,
  // });
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
