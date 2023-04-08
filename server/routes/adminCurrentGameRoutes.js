import express from "express";
import {
  getCurrentUsersPerGame,
  assignPairs,
  startGame,
} from "../controllers/adminCurrentGameController.js";

const router = express.Router({ mergeParams: true });

router.route("/game/:id").get(getCurrentUsersPerGame).put(assignPairs);
router.route("/game/:id/gamestarted").put(startGame);

export default router;
