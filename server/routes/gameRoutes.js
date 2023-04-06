import express from "express";
import { createGame } from "../controllers/gameController.js";

const router = express.Router({ mergeParams: true });

router.route("/gamesettings").post(createGame);

export default router;
