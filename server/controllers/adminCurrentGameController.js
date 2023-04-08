import ErrorResponse from "../utils/errorResponse.js";
import asyncHandler from "../middleware/asyncHandler.js";
import Game from "../models/Game.js";
import User from "../models/User.js";
import _ from "lodash-es";

// @desc    Get users per game
// @route   GET /api/v1/admin/game/:id
// @access  Private/Admin
export const getCurrentUsersPerGame = asyncHandler(async (req, res, next) => {
  const game = await Game.findById(req.params.id);
  const gameAssignments = game.assignments;
  const currentUsersForGame = await Promise.all(
    game.users.map(async (id) => {
      const user = await User.findById(id);
      const relevantAssignment = gameAssignments.find((assignment) => {
        return assignment.giver.equals(id);
      });
      let receiver = { name: "unassigned" };
      if (relevantAssignment) {
        receiver = await User.findById(relevantAssignment.receiver);
      }
      return {
        fullName: user.name,
        email: user.email,
        receiver: receiver.name,
        finished: relevantAssignment.finished,
        id: user.id,
      };
    })
  );
  currentUsersForGame.sort((a, b) => a.fullName.localeCompare(b.fullName));
  res.status(200).json({
    success: true,
    data: currentUsersForGame,
  });
});

// @desc    Update users per game
// @route   PUT /api/v1/admin/game/:id
// @access  Private/Admin
export const assignPairs = asyncHandler(async (req, res, next) => {
  const game = await Game.findById(req.params.id);

  const currentUsersForGame = await Promise.all(
    game.users.map(async (id) => {
      const user = await User.findById(id);
      return {
        giver: user.id,
      };
    })
  );

  let participants = currentUsersForGame;

  participants = _.shuffle(participants);

  participants.forEach(async (participant, i) => {
    if (i === participants.length - 1) {
      participant.receiver = participants[0].giver;
    } else {
      participant.receiver = participants[i + 1].giver;
    }
    participant.finished = false;
  });

  // Update the assignments array in the database
  const filter = { _id: game._id };
  const update = { $set: { assignments: participants } };
  const options = { new: true }; // Return the updated document
  const updatedGame = await Game.findOneAndUpdate(filter, update, options);

  res.status(200).json({
    success: true,
  });
});

// @desc    Start game
// @route   PUT /api/v1/admin/game/:id/gamestarted
// @access  Private/Admin
export const startGame = asyncHandler(async (req, res, next) => {
  const game = await Game.findByIdAndUpdate(
    req.params.id,
    { isStarted: true },
    { new: true }
  );

  res.status(200).json({
    success: true,
    data: game,
  });
});
