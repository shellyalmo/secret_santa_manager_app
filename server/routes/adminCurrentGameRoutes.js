import express from "express";
import { getCurrentUsersPerGame } from "../controllers/adminCurrentGameController.js";

const router = express.Router({ mergeParams: true });

router.route("/game/:id").get(getCurrentUsersPerGame);

export default router;
