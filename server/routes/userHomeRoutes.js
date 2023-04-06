import express from "express";
import {
  getGamesPerUser,
  joinGame,
} from "../controllers/userHomeController.js";

const router = express.Router({ mergeParams: true });

router.route("/").get(getGamesPerUser).put(joinGame);

export default router;
