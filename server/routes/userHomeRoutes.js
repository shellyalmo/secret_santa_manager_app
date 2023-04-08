import express from "express";
import {
  getGamesPerUser,
  joinGame,
} from "../controllers/userHomeController.js";
import { protect, authorize } from "./../middleware/authMiddleware.js";
const router = express.Router({ mergeParams: true });
router.use(protect);

router.route("/").get(getGamesPerUser).put(joinGame);

export default router;
