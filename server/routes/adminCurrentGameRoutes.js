import express from "express";
import {
  getCurrentUsersPerGame,
  assignPairs,
} from "../controllers/adminCurrentGameController.js";

const router = express.Router({ mergeParams: true });

router.route("/game/:id").get(getCurrentUsersPerGame).put(assignPairs);

export default router;
