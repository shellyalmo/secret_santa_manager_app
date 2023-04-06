import express from "express";
import { createGame } from "../controllers/gameController.js";
import { protect, authorize } from "./../middleware/authMiddleware.js";
const router = express.Router({ mergeParams: true });
router.use(protect);

router.route("/gamesettings").post(createGame);

export default router;
